import { ArrowRight, BarChart2, Brain, TrophyIcon, Sparkles, ScaleIcon, Radar } from 'lucide-react';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Logo from './assets/Logo.svg';


const advantages = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    text: "Готові ідеї від агента, що оновлюються кожного дня.",
    image: "https://images.unsplash.com/photo-1642790106131-6de9e069a9ee"
  },
  {
    icon: <ScaleIcon className="w-6 h-6" />,
    text: "Погляд з двох позицій: інвестора та спекулянта.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
  },
  {
    icon: <TrophyIcon className="w-6 h-6" />,
    text: "HIT – унікальний критерій відбору найкращих активів, згідно фундаментального та технічного аналізу.",
    image: "https://images.unsplash.com/photo-1642790106099-948a2465ff86"
  },
  {
    icon: <Radar className="w-6 h-6" />,
    text: "Список відстеження активів.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f"
  }
];

// Network background component
const NetworkBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Concentrated network grid */}
      <div className="relative transform -rotate-12 network-float" 
        style={{ width: '800px', height: '400px' }}> {/* Narrower fixed dimensions */}
        {Array.from({ length: 60 }).map((_, i) => { // Reduced number of dots
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomScale = 0.8 + Math.random() * 0.4;

          return (
            <div key={i} 
              className="absolute" 
              style={{ 
                left: `${randomX}%`, 
                top: `${randomY}%`,
                transform: `scale(${randomScale})`
              }}>
              {/* Central dot */}
              <div className="w-1.5 h-1.5 bg-white rounded-full relative z-10" />
              
              {/* Connection lines */}
              <div className="absolute inset-0">
                {Array.from({ length: 3 }).map((_, j) => { // Fixed number of connections
                  const angle = (j * 120 + Math.random() * 30); // More regular angles
                  const length = 50 + Math.random() * 30; // Shorter, more consistent lengths
                  
                  return (
                    <div key={j}
                      className="absolute top-0 left-1/2 bg-gradient-to-b from-white via-white/50 to-transparent"
                      style={{
                        width: '1px',
                        height: `${length}px`,
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'top',
                        opacity: 0.4 + Math.random() * 0.3
                      }} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

function App() {
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-[#6525AB]/10 border-b border-[#6525AB]/20 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6525AB]/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 pt-32 pb-40 text-center relative">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-7xl font-bold mb-4 glow-text uppercase">
              Агент Хагс
            </h1>
            <p className="text-3xl text-gray-300 font-light">Твій помічник на фондовому ринку США!</p>
            <div className="flex justify-center gap-6 mt-12">
              <button className="bg-[#6525AB] text-white px-8 py-4 rounded-lg text-xl font-semibold 
                hover:bg-opacity-90 transition-all flex items-center gap-2 animate-pulse-slow rounded-full">
                Спробувати <ArrowRight className="w-5 h-5" />
              </button>
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
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
              alt="Trading visualization" 
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6525AB]/80 to-transparent" />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-8 text-[#6525AB] uppercase">Допомагаємо знаходити нові можливості</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
            Уяви, що в тебе є особистий помічник на ринку акцій, який допомагає знаходити потрібні активи, генерує за ними ідеї та нагадує, коли їх треба купити чи продати.
            Наш агент пропонує оформлені інвестиційні ідеї, а також готовий допомогти з реалізацією твоїх власних задумів.
            </p>
            <button className="bg-[#6525AB] text-white px-8 py-4 rounded-lg text-xl font-semibold 
              hover:bg-opacity-90 transition-all flex items-center gap-2 animate-pulse-slow rounded-full">
              Спробувати <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-gray-800/50 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1642790106099-948a2465ff86?auto=format&fit=crop&q=80"
            alt="Background pattern" 
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
                  shadow-[0_8px_32px_0_rgba(101,37,171,0.37)]
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <ScaleIcon className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Ми дивимось на кожен актив з двох точок зору: короткострокового спекулянта та довгострокового інвестора.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="h-[320px]">
              <div className="relative h-full">
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 
                  shadow-[0_8px_32px_0_rgba(101,37,171,0.37)]
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <BarChart2 className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Розраховуємо справедливу вартість активу на базі Fair P/E, прогнозів аналітиків та ринкового сентименту.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[320px]">
              <div className="relative h-full">
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 
                  shadow-[0_8px_32px_0_rgba(101,37,171,0.37)]
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl
                  h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <Brain className="w-12 h-12 mb-6 text-white" />
                    <p className="text-lg text-white/90 flex-grow">Оцінюємо інвестицію на основі DCF-моделі, враховуючи ринкову динаміку та аналізуючи ключові можливості та загрози.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-16 text-[#6525AB] uppercase">Переваги</h2>
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
          </div>
          <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden">
            <img 
              src={`${advantages[selectedAdvantage].image}?auto=format&fit=crop&q=80`}
              alt="Trading analysis" 
              className="w-full h-[600px] object-cover rounded-2xl transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#6525AB]/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="bg-gray-800/50 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1642790106098-d05b98f39fce?auto=format&fit=crop&q=80"
            alt="Background pattern" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gray-800/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#6525AB] uppercase">ТАРИФИ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Freemium Card */}
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#6525AB]">FREEMIUM</h3>
              <p className="text-lg text-gray-300">Start for free</p>
              <button className="mt-8 border-2 border-[#6525AB] text-[#6525AB] px-8 py-3 rounded-lg 
                hover:bg-[#6525AB] hover:text-white transition-all rounded-full">
                Get Started
              </button>
            </div>
            
            {/* Base Card with Premium Effect */}
            <div className="relative group transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6525AB] via-[#8a4dd1] to-[#6525AB] rounded-xl opacity-0 
                group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-[#6525AB]/90 backdrop-blur-xl p-8 rounded-xl border border-white/30 text-center 
                shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] transition-all duration-300
                hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.4)]
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-xl">
                <div className="relative z-10">
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">BASE</h3>
                  <p className="text-3xl font-bold text-white mb-4">300 грн/міс</p>
                  <ul className="text-white/90 text-left space-y-3 mb-8 backdrop-blur-sm bg-white/10 p-4 rounded-lg
                    border border-white/20">
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> All Freemium features
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Premium analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span> Priority support
                    </li>
                  </ul>
                  <button className="bg-white/95 text-[#6525AB] px-8 py-3 rounded-lg font-semibold
                    hover:bg-white transition-all shadow-[0_4px_16px_rgba(255,255,255,0.3)]
                    hover:shadow-[0_4px_24px_rgba(255,255,255,0.4)]
                    transform hover:scale-105 animate-pulse-slow rounded-full">
                    Обрати
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
    </div>
  );
}

export default App;