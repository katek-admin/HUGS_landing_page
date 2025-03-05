import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
     <footer className="bg-gray-800/50 py-8 border-t border-gray-700">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="order-2 flex items-center gap-4 md:order-1">
           <img src={Logo} alt="Logo" className="h-8 w-auto" />
           <p className="text-gray-400">
             © {new Date().getFullYear()} Агент Хагс. Всі права захищені.
           </p>
         </div>
         <div className="order-1 flex flex-col items-center md:order-2 md:flex-row md:items-start gap-4 md:gap-8 ">
         <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors px-4"
            >
              Політика конфіденційності
            </Link>
            <Link 
              to="/public-offer" 
              className="text-gray-400 hover:text-[#6525AB] transition-colors"
            >
              Договір публічної оферти
            </Link>
           
         </div>
       </div>
     </div>
   </footer>
  );
};

export default Footer; 