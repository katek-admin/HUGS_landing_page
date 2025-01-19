import { ArrowRight, BarChart2, Brain, TrophyIcon, Sparkles, ScaleIcon, Radar } from 'lucide-react';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Logo from './assets/Logo.svg';


const advantages = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    text: "Ready-made ideas from the agent, updated every day.",
    image: "https://images.unsplash.com/photo-1642790106131-6de9e069a9ee"
  },
  {
    icon: <ScaleIcon className="w-6 h-6" />,
    text: "A view from two positions: an investor and a speculator.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
  },
  {
    icon: <TrophyIcon className="w-6 h-6" />,
    text: "HIT is a unique criterion for selecting the best assets, according to fundamental and technical analysis.",
    image: "https://images.unsplash.com/photo-1642790106099-948a2465ff86"
  },
  {
    icon: <Radar className="w-6 h-6" />,
    text: "Asset Tracking List.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f"
  }
];

function App() {
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-[#6525AB]/10 border-b border-[#6525AB]/20 overflow-hidden">
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
              Agent Hugs
            </h1>
            <p className="text-3xl text-gray-300 font-light">Your assistant in the US stock market!</p>
            <div className="flex justify-center gap-6 mt-12">
              <button className="bg-[#6525AB] text-white px-8 py-4 rounded-lg text-xl font-semibold 
                hover:bg-opacity-90 transition-all flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-xl font-semibold 
                hover:bg-opacity-90 transition-all border border-gray-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900" />
      </header>

      {/* Quote Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl italic text-gray-300">
            "Every day gives us new opportunities. It all depends on whether we use them."
            <footer className="mt-4 text-lg text-gray-400">— Stephen R. Covey</footer>
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
            <h2 className="text-4xl font-bold mb-8 text-[#6525AB] uppercase">Helping you find new opportunities</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              Imagine having a personal assistant in the stock market who helps you find the right assets, 
              generates ideas for them and reminds you when to buy or sell them.
              Our agent offers formalized investment ideas, and is also ready to help with the implementation 
              of your own ideas.
            </p>
            <button className="bg-[#6525AB] text-white px-8 py-4 rounded-lg text-xl font-semibold 
              hover:bg-opacity-90 transition-all flex items-center gap-2">
              Try it <ArrowRight className="w-5 h-5" />
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
          <h2 className="text-4xl font-bold text-center mb-16 text-[#6525AB] uppercase">How does it work?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <ScaleIcon className="w-12 h-12 mb-6 text-[#6525AB]" />
              <p className="text-lg text-gray-300">We look at each asset from two perspectives: a short-term speculator and a long-term investor.</p>
            </div>
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <BarChart2 className="w-12 h-12 mb-6 text-[#6525AB]" />
              <p className="text-lg text-gray-300">We calculate the fair value of the asset based on Fair P/E, analyst forecasts and market sentiment.</p>
            </div>
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <Brain className="w-12 h-12 mb-6 text-[#6525AB]" />
              <p className="text-lg text-gray-300">We evaluate the investment based on the DCF model, taking into account market dynamics and analyzing key opportunities and threats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-16 text-[#6525AB] uppercase">Advantages</h2>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-[#6525AB] uppercase">Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#6525AB]">Freemium</h3>
              <p className="text-lg text-gray-300">Start exploring for free</p>
              <button className="mt-8 border-2 border-[#6525AB] text-[#6525AB] px-8 py-3 rounded-lg 
                hover:bg-[#6525AB] hover:text-white transition-all">Get Started</button>
            </div>
            <div className="bg-[#6525AB] p-8 rounded-xl text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">Base</h3>
              <p className="text-3xl font-bold text-white">300 UAH/month</p>
              <button className="mt-8 bg-white text-[#6525AB] px-8 py-3 rounded-lg 
                hover:bg-opacity-90 transition-all">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800/50 py-8 mt-16 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <p className="text-gray-400">
                © {new Date().getFullYear()} Agent Hugs. All rights reserved.
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#opportunities" className="text-gray-400 hover:text-[#6525AB] transition-colors">
                OPPORTUNITIES
              </a>
              <a href="#how-it-works" className="text-gray-400 hover:text-[#6525AB] transition-colors">
                HOW IT WORKS
              </a>
              <a href="#advantages" className="text-gray-400 hover:text-[#6525AB] transition-colors">
                ADVANTAGES
              </a>
              <a href="#plans" className="text-gray-400 hover:text-[#6525AB] transition-colors">
                PLANS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;