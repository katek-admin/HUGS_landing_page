import '../styles/Navbar.css';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="nav-logo" />
        <div className="nav-links">
          <a href="#opportunities" className="nav-link">OPPORTUNITIES</a>
          <a href="#how-it-works" className="nav-link">HOW IT WORKS</a>
          <a href="#advantages" className="nav-link">ADVANTAGES</a>
          <a href="#plans" className="nav-link">PLANS</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;