import { useState, useEffect } from "react";
import {
  FaMobileAlt,
  FaCommentDots,
  FaExclamationTriangle,
  FaNetworkWired,
  FaWhatsapp,
  FaBell,
} from "react-icons/fa";
import ScrollAnimation from "../ui/ScrollAnimation";
import BlurText from "../ui/BlurText";

const ProblemSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0]);
    }, 500);

    const timer2 = setTimeout(() => {
      setVisibleCards([0, 1]);
    }, 800);

    const timer3 = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 1100);

    const timer4 = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3]);
    }, 1400);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const problems = [
    {
      icon: FaMobileAlt,
      title: "Mensagens perdidas",
      description: "Até 80% das mensagens no WhatsApp ficam sem resposta",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FaCommentDots,
      title: "Críticas sem resposta",
      description: "Comentários negativos se acumulam sem uma estratégia",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaExclamationTriangle,
      title: "Equipe sobrecarregada",
      description: "Múltiplas plataformas geram confusão e estresse",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: FaNetworkWired,
      title: "Comunicação fragmentada",
      description: "Informações espalhadas em diferentes canais",
      color: "from-primary-purple to-primary-blue",
    },
  ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4">
      {/* Background effects */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

      <ScrollAnimation animation="slideUp" delay={200}>
        <div className="text-center mb-16 relative z-10">
          <BlurText
            text="Você se reconhece neste cenário?"
            delay={15}
            animateBy="words"
            direction="top"
            className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comunicação política moderna está fragmentada e ineficiente
          </p>
        </div>
      </ScrollAnimation>

      {/* Problem cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary-purple/20">
              <div className="text-4xl mb-4 transition-transform duration-300 text-primary-purple">
                <problem.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chaotic mockup visualization */}
      <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>

        <div className="relative z-10">
          {/* Animated notification chaos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 animate-pulse"
                style={{
                  animationDelay: `${item * 0.2}s`,
                  animationDuration: "2s",
                }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FaBell className="w-3 h-3 text-red-500 animate-ping" />
                  <div className="text-sm text-gray-300 flex items-center space-x-2">
                    <FaWhatsapp className="text-green-500" />
                    <span>WhatsApp</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded w-3/4 mb-1"></div>
                <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                <div className="text-xs text-gray-500 mt-2">
                  {Math.floor(Math.random() * 60)} min atrás
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
