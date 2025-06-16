import '../styles/Navbar.css';
import Logo from '../assets/logo_white.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
      <div className="nav-links hidden md:flex items-center">
        <button 
          onClick={() => scrollToSection('opportunities')} 
          className="nav-link"
        >
          {t('whatIsIt')}
        </button>
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="nav-link"
        >
          {t('howItWorks')}
        </button>
        <button 
          onClick={() => scrollToSection('advantages')} 
          className="nav-link"
        >
          {t('advantages')}
        </button>
        <button 
          onClick={() => scrollToSection('plans')} 
          className="nav-link"
        >
          {t('plans')}
        </button>

        {/* Language Toggle */}
        <div className="flex gap-2 ml-4">
          <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
            >
            EN
          </button>
          <button 
            onClick={() => setLanguage('ua')}
            className={`px-2 py-1 rounded ${language === 'ua' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            UA
          </button>
          <button 
            onClick={() => setLanguage('ru')}
            className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            RU
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('opportunities')}
          >
            {t('whatIsIt')}
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('how-it-works')}
          >
            {t('howItWorks')}
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('advantages')}
          >
            {t('advantages')}
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('plans')}
          >
            {t('plans')}
          </button>
          
          {/* Mobile Language Toggle */}
          <div className="flex justify-center gap-2 mt-4">
            <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ua')}
              className={`px-2 py-1 rounded ${language === 'ua' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
            >
              UA
            </button>
            <button 
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-[#6525AB] text-white' : 'text-gray-300 hover:text-white'}`}
            >
              RU
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;