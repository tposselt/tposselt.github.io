import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="header">
            <Link to="/home" className="nav-link" id="home-link">
                HOME
            </Link>
            <div>
                <Link to="/about" className="nav-link"> About </Link>
                <Link to="/projects" className="nav-link"> Projects </Link>
                <Link to="/contact" className="nav-link"> Contact </Link>
            </div>
        </div>
    );
}