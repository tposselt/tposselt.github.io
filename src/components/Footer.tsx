import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            &copy; { new Date().getFullYear() } 
            <Link to="/contact" className="faint"> Contact </Link>
        </div>
    );
}