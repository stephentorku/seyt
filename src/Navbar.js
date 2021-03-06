import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
        <nav className="navbar-header">
            <div className="logo">
                <a href="/">stephen torku</a>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/interests">Interests</Link>
                <Link to="/resume" style={{color: "white", background: "#001c2e", borderRadius: "8px"}}>Resume</Link>
            </div>
        </nav>
        </header>
    );
}
export default Navbar;