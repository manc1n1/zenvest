import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);
    //const loggedIn = true;

    // useNavigate 


    function logout() {
        console.log("logged out successfully")
    }
    
    return (
    <div className='container'>
        <ul className='list-group'>
            <li>
            <Link to='home'>
                Home
            </Link>
            </li>
            <li>
            <Link to='profile'>
                Profile
            </Link>
            </li>
            <li>
            {loggedIn ?     
                <Link to='dashboard'>My Dashboard</Link>
                : ""}
            </li>
            <li>
            {loggedIn ?     
                <button>
                    <Link to='login'>Login</Link>
                </button>
                :
                <button onClick={() => logout()}>Logout</button>
            }
            </li>
        </ul>
    </div>
    );
};

export default Navbar;