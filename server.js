
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/votingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const voteSchema = new mongoose.Schema({
  user: String,
  candidate: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);
const Vote = mongoose.model('Vote', voteSchema);

app.post('/submit-vote', async (req, res) => {
  const { user, candidate } = req.body;
  const newVote = new Vote({ user, candidate });

  try {
    await newVote.save();
    res.status(200).send('Vote submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting vote');
  }
});

app.get('/api/submit-vote', async (req, res) => {
  try {
    const votes = await Vote.find();
    res.status(200).json({ votes });
  } catch (error) {
    console.error("Error fetching votes data", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/api/vote-counts', async (req, res) => {
  try {
    const voteCounts = await Vote.aggregate([
      { $group: { _id: '$candidate', count: { $sum: 1 } } },
    ]);

    const result = {};
    voteCounts.forEach((vote) => {
      result[vote._id] = vote.count;
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching vote counts", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// const User = mongoose.model('User', voteSchema);

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });

  try {
    await newUser.save();
    res.status(200).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});



app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email, password });
    
    if (user) {
      res.status(200).json({ email: user.email, password: user.password });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});
