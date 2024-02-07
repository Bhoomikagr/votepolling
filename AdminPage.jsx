
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import PollResultsChart from './PollResultsChart';

const AdminPage = () => {
  const [votes, setVotes] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchVotesData = async () => {
      try {
        const response = await axios.get("https://r66qcq6n-3001.inc1.devtunnels.ms/api/vote-counts");
        setVotes(response.data);
      } catch (error) {
        console.error("Error fetching vote counts data", error);
      }
    };

    fetchVotesData();
  }, [isAdmin]);

  if (!isAdmin) {
    return <AdminLogin setIsAdmin={setIsAdmin} />;
  }

  return (
    <div>
      <h2>Poll Results (Admin Page)</h2>
      <ul>
        {Object.entries(votes).map(([candidate, count]) => (
          <li key={candidate}>{`${candidate}: ${count}`}</li>
        ))}
      </ul>
      <PollResultsChart votes={votes} />
    </div>
  );
};

export default AdminPage;
