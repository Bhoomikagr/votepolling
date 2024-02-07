import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
      <div>
        <nav>
           <ul>
            <li>
          <div><Link to="/PollingForm">Polling Form</Link></div>
              
            </li>
            <li>
              <div> <Link to="/admin"> Admin Page</Link></div>
             
            </li>
            <li>
              <div><Link to="/registrationform"> Register</Link></div>
            </li>
          </ul> 
        </nav>
      
        
       </div>
       
     );
}
 
export default Navbar;