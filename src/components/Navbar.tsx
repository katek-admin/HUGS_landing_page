import '../styles/Navbar.css';
import Logo from '../assets/logo_white.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="nav-logo" onClick={() => window.location.href = '/'}/>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white hover:text-[#6525AB] transition-colors"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="nav-links hidden md:flex">
        <a href="#opportunities" className="nav-link" onClick={() => window.location.href = '/#opportunities'}>ЩО ЦЕ</a>
        <a href="#how-it-works" className="nav-link" onClick={() => window.location.href = '/#how-it-works'}>ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#advantages" className="nav-link" onClick={() => window.location.href = '/#advantages'}>ПЕРЕВАГИ</a>
        <a href="#plans" className="nav-link" onClick={() => window.location.href = '/#plans'}>ТАРИФИ</a>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#opportunities" className="mobile-nav-link" onClick={toggleMenu}>ЩО ЦЕ</a>
          <a href="#how-it-works" className="mobile-nav-link" onClick={toggleMenu}>ЯК ЦЕ ПРАЦЮЄ</a>
          <a href="#advantages" className="mobile-nav-link" onClick={toggleMenu}>ПЕРЕВАГИ</a>
          <a href="#plans" className="mobile-nav-link" onClick={toggleMenu}>ТАРИФИ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;