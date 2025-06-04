import { ArrowRight, BarChart2, Brain, Sparkles, ScaleIcon, Radar, ArrowBigRight, ArrowBigDown } from 'lucide-react';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Background from './assets/background.jpg';
import NewOpportunityImg from './assets/new_opportunities.png';
import HITImg from './assets/HIT.png';
import PortfolioImg from './assets/Portfolio.png';
//import TwoOpinionsImg from './assets/2 opinions.png';
import ThreeOpinionsImg from './assets/3 opinions.png';
import Footer from './components/Footer';

const advantages = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    text: "Інформаційно-аналітичні огляди публічних компаній у зручному форматі",
    image: ThreeOpinionsImg
  },
  {
    icon: <ScaleIcon className="w-6 h-6" />,
    text: "Добірка компаній з високими оцінками згідно нашої аналітичної моделі",
    image: HITImg
  },
  {
    icon: <Radar className="w-6 h-6" />,
    text: "Персоналізовані повідомлення, які налаштовуються за твоїми критеріями",
    image: PortfolioImg
  }
];


function App() {
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-[#6525AB]/10  border-[#6525AB]/20 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6525AB]/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <img 
            src={Background}
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 pt-32 pb-40 text-center relative">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-7xl font-bold mb-4 glow-text uppercase">
              Агент Хагс
            </h1>
            <p className="text-3xl text-gray-300 font-light">Твій помічник на фондовому ринку США!</p>
            <div className="flex justify-center gap-6 mt-12">
              <a 
                href="#plans" 
                className="bg-[#6525AB] text-white px-8 py-4 rounded-full text-xl font-semibold 
                  hover:bg-opacity-90 transition-all flex items-center gap-2 animate-pulse-slow
                  cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('plans')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Спробувати <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900" />
      </header>

      {/* Quote Section */}
      <section className="bg-gray-800/50 py-14">
        <div className="container mx-auto px-4 text-center">
          
          <blockquote className="text-2xl italic text-gray-300">
              "Кожен день дає нам нові можливості. Все залежить від того, чи ми їх використовуємо."
            <footer className="mt-4 text-lg text-gray-400">— Стівен Р. Кові</footer>
          </blockquote>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={NewOpportunityImg}
              alt="Trading visualization" 
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6525AB]/80 to-transparent" />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-8 text-[#6525AB] uppercase">Допомагаємо знаходити нові можливості</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              <ArrowBigDown className="inline-block w-4 h-4 mr-2" /> Уяви, що в тебе є особистий помічник на фондовому ринку, який допомагає аналізувати різні активи та ухвалювати більш зважені рішення.
              <br />
              <ArrowBigDown className="inline-block w-4 h-4 mr-2" /> Агент Хагс відкидає весь шум і зосереджується на головному — на цифрах.
              <br />
              <ArrowBigDown className="inline-block w-4 h-4 mr-2" /> Вводиш тикер — і отримуєш інформаційно-аналітичний огляд на основі публічних джерел та ринкових індикаторів.
              <br /><br />
              <ArrowBigRight className="inline-block w-4 h-4 mr-2" /> Рішення завжди залишається за тобою.
            </p>
            <button className="bg-[#6525AB] text-white px-8 py-4 rounded-full text-xl font-semibold 
              hover:bg-opacity-90 transition-all flex items-center gap-2 animate-pulse-slow rounded-full"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('plans')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}>
              Спробувати <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-gray-800/50 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./assets/background.jpg?auto=format&fit=crop&q=80"
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gray-800/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#6525AB] uppercase">Як це працює?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="h-[320px]">
              <div className="relative h-full">
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <ScaleIcon className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Ми аналізуємо кожну компанію з двох точок зору: короткострокової ринкової динаміки та довгострокових фундаментальних показників.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="h-[320px]">
              <div className="relative h-full">
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <BarChart2 className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Розраховуємо орієнтовну вартість на основі фінансових коефіцієнтів, ринкових настроїв і аналітичних прогнозів з відкритих джерел.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[320px]">
              <div className="relative h-full">
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <Brain className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Моделюємо сценарії зміни вартості за допомогою DCF та інших загальновживаних методів, враховуючи потенційні ризики та можливості.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section id="video" className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 text-center backdrop-blur-sm flex flex-col">
              <div className="w-full h-[400px]">
                <iframe 
                  src="https://www.youtube.com/embed/S3js7YolsqE" 
                  title="YouTube video Agent HUGS" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advantages Section */}
      <section id="advantages" className="bg-gray-800/50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-center text-[#6525AB] uppercase sm:mb-10">Переваги</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto py-0">
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-6 rounded-xl border transition-all cursor-pointer
                      ${selectedAdvantage === index 
                        ? 'bg-[#6525AB] border-purple-400' 
                        : 'bg-gray-800 border-gray-700 hover:bg-gray-700'}`}
                    onClick={() => setSelectedAdvantage(index)}
                  >
                    <div className={`shrink-0 ${selectedAdvantage === index ? 'text-white' : 'text-[#6525AB]'}`}>
                      {advantage.icon}
                    </div>
                    <p className={`text-lg ${selectedAdvantage === index ? 'text-white' : 'text-gray-300'}`}>
                      {advantage.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden mt-10">
                <img 
                  src={`${advantages[selectedAdvantage].image}?auto=format&fit=crop&q=80`}
                  alt="" 
                  className="w-full h-auto xl:h-[400px]object-contain xl:object-cover rounded-2xl transition-opacity duration-300"
                />       
              </div>
          </div>
         </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#6525AB] uppercase">ТАРИФИ</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
            {/* Base Card with Premium Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6525AB] via-[#8a4dd1] to-[#6525AB] rounded-xl opacity-0 
                group-hover:opacity-10 blur-md transition-all duration-500" />
              <div className="relative bg-[#6525AB]/90 backdrop-blur-xl p-8 rounded-xl border border-white/30 text-center 
                shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] transition-all duration-300
                hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.4)]
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-xl
                h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-white">BASE</h3>
                  <p className="text-3xl font-bold text-white mb-4">500 грн/міс*</p>
                  <ul className="text-white/90 text-left space-y-3 mb-2 backdrop-blur-sm bg-white/10 p-4 rounded-lg
                    border border-white/20 flex-grow">
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Огляди компаній на основі публічних даних
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Список спостереження
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> ШІ-помічник для формування інформаційних оглядів
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Персоналізовані повідомлення
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Перелік компаній з високими аналітичними оцінками
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm mb-4">* для учасників <a className="underline" href="https://t.me/lifehugs_bot">Life HUG'S</a> діють знижки</p>
                  <button className="bg-white/95 text-[#6525AB] px-8 py-3 mt-2 rounded-full font-semibold
                    hover:bg-white transition-all shadow-[0_4px_16px_rgba(255,255,255,0.3)]
                    hover:shadow-[0_4px_24px_rgba(255,255,255,0.4)]
                    transform hover:scale-105 animate-pulse-slow mt-auto"
                    onClick={() => {
                      window.open('https://agenthugs.ai/login', '_blank');
                    }}
                    >
                    Обрати
                  </button>
                </div>
              </div>
            </div>
            
   
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
      <Footer />
    </div>
  );
}

export default App;