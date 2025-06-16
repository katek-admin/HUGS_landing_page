import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
     <footer className="bg-gray-800/50 py-8 border-t border-gray-700">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm w-3/4">
          <p><strong>{t.disclaimer.title}</strong> {t.disclaimer.text}</p>
        </div>
        
         <div className="w-1/4 order-1 flex flex-col items-center md:order-2 gap-2">
         <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <Link 
              to="/public-offer" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors"
            >
              {t.footer.publicOffer}
            </Link>
           
         </div>
       </div>
       <div className="order-2 flex items-center justify-center gap-4 md:order-1 mt-4">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <p className="text-gray-400 text-sm">
          {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
        </p>
       </div>
     </div>
   </footer>
  );
};

export default Footer; 