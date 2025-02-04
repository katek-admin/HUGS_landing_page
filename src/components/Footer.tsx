import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
     <footer className="bg-gray-800/50 py-8 border-t border-gray-700">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="flex items-center gap-4">
           <img src={Logo} alt="Logo" className="h-8 w-auto" />
           <p className="text-gray-400">
             © {new Date().getFullYear()} Агент Хагс. Всі права захищені.
           </p>
         </div>
         <div className="hidden md:flex gap-8">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors"
            >
              Політика конфіденційності
            </Link>
            <Link 
              to="/public-offer" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors"
            >
              Договір публічної оферти
            </Link>
           <a href="#opportunities" className="text-gray-400 hover:text-[#6525AB] transition-colors">
             ЩО ЦЕ
           </a>
           <a href="#how-it-works" className="text-gray-400 hover:text-[#6525AB] transition-colors">
             ЯК ЦЕ ПРАЦУЄ
           </a>
           <a href="#advantages" className="text-gray-400 hover:text-[#6525AB] transition-colors">
             ПЕРЕВАГИ
           </a>
           <a href="#plans" className="text-gray-400 hover:text-[#6525AB] transition-colors">
             ТАРИФИ
           </a>
           
         </div>
       </div>
     </div>
   </footer>
  );
};

export default Footer; 