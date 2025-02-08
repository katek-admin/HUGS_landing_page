import '../styles/Navbar.css';
import Logo from '../assets/logo_white.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }, 100);
  };

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
        <button 
          onClick={() => scrollToSection('opportunities')} 
          className="nav-link"
        >
          ЩО ЦЕ
        </button>
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="nav-link"
        >
          ЯК ЦЕ ПРАЦЮЄ
        </button>
        <button 
          onClick={() => scrollToSection('advantages')} 
          className="nav-link"
        >
          ПЕРЕВАГИ
        </button>
        <button 
          onClick={() => scrollToSection('plans')} 
          className="nav-link"
        >
          ТАРИФИ
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('opportunities')}
          >
            ЩО ЦЕ
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('how-it-works')}
          >
            ЯК ЦЕ ПРАЦЮЄ
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('advantages')}
          >
            ПЕРЕВАГИ
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('plans')}
          >
            ТАРИФИ
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;