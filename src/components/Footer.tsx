import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
     <footer className="bg-gray-800/50 py-8 border-t border-gray-700">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm w-3/4">
          <p><strong>Дисклеймер:</strong> Інформація, що надається цим сервісом, має виключно інформаційний та аналітичний характер. Вона сформована на основі публічно доступних джерел і не є інвестиційною порадою, рекомендацією, чи закликом до здійснення будь-яких фінансових операцій.
          Компанія не є ліцензованим учасником фінансового ринку та не надає послуг з інвестиційного консультування, управління активами або брокерської діяльності.</p>
        </div>
        
         <div className="w-1/4 order-1 flex flex-col items-center md:order-2 gap-2">
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
           
         </div>
       </div>
       <div className="order-2 flex items-center justify-center gap-4 md:order-1 mt-4">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Агент Хагс. Всі права захищені.
        </p>
       </div>
     </div>
   </footer>
  );
};

export default Footer; 