import { useState, useEffect } from "react";
import {
  FaVoteYea,
  FaClock,
  FaBullhorn,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import BlurText from "../ui/BlurText";

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [animatedNumbers, setAnimatedNumbers] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0]);
    }, 300);

    const timer2 = setTimeout(() => {
      setVisibleCards([0, 1]);
    }, 600);

    const timer3 = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 900);

    const timer4 = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3]);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Animate numbers
  useEffect(() => {
    const benefits = [
      { target: 85, duration: 2000 },
      { target: 70, duration: 2000 },
      { target: 95, duration: 2000 },
      { target: 90, duration: 2000 },
    ];

    benefits.forEach((benefit, index) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / benefit.duration, 1);
        const current = Math.floor(progress * benefit.target);

        setAnimatedNumbers((prev) => ({ ...prev, [index]: current }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, index * 500);
    });
  }, []);

  const benefits = [
    {
      title: "Mais Votos",
      description: "Aumento significativo na conversão de interações em votos",
      icon: FaVoteYea,
      gradient: "from-green-500 to-emerald-500",
      metric: "85%",
      metricLabel: "mais engajamento",
      chart: FaChartLine,
    },
    {
      title: "Mais Tempo",
      description: "Redução drástica no tempo gasto com comunicação manual",
      icon: FaClock,
      gradient: "from-primary-blue to-cyan-500",
      metric: "70%",
      metricLabel: "menos tempo",
      chart: FaClock,
    },
    {
      title: "Mais Influência",
      description: "Amplificação do alcance e impacto das suas mensagens",
      icon: FaBullhorn,
      gradient: "from-primary-purple to-violet-500",
      metric: "95%",
      metricLabel: "mais alcance",
      chart: FaChartLine,
    },
    {
      title: "Decisões Inteligentes",
      description: "Dados em tempo real para estratégias mais eficazes",
      icon: FaBrain,
      gradient: "from-yellow-500 to-orange-500",
      metric: "90%",
      metricLabel: "mais precisão",
      chart: FaChartLine,
    },
  ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4">
      {/* Background effects */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="text-center mb-16 relative z-10">
        <BlurText
          text="O Retorno? É medido em Votos, Tempo e Influência"
          delay={15}
          animateBy="words"
          direction="top"
          className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
        />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Resultados mensuráveis que transformam sua comunicação política
        </p>
      </div>

      {/* Benefits cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 group hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary-purple/20 flex flex-col">
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
              >
                <benefit.icon className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {benefit.description}
              </p>

              {/* Animated metric */}
              <div className="mt-auto">
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                >
                  {animatedNumbers[index] || 0}%
                </div>
                <div className="text-sm text-gray-400">
                  {benefit.metricLabel}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA hint */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Resultados comprovados em campanhas reais</span>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
