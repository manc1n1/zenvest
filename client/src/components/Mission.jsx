import { Link } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Mission() {
    console.log("Mission rendered successfully");
    const { login, logoutUser } = useLoginContext();

    return (
        <div>
            <h3>Mission statement</h3>
            <h3>Start Investing Today</h3>
            {/* If already logged in, redirect to dashboard. If not logged in, redirect to sign up page. */}
            {login.loggedIn ? (
                <button>
                <Link to="dashboard">Sign Up</Link>
                </button>
                ) : (
                <button>
                <Link to="signup">Sign Up</Link>
                </button>
			)}
        </div>
    );
 }


export default Mission;