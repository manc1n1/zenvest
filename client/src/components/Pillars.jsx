import { Link } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Pillars() {
    console.log("Pillars rendered successfully");

    return (
        <div>
            <ul>
                <h3>INVEST</h3>
                <h3>LEARN</h3>
                <h3>ORGANIZE</h3>
            </ul>
        </div>
    );
 }


export default Pillars;