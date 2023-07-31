import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Back to Login</Link>
                </li>
                <li>
                    <Link to='/Scorepage'>Next Match</Link>
                </li>
                <li>
                    <Link to='/Scorepage/Blogpage'>Blog Page</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;