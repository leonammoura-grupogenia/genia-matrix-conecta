import { useState, useEffect } from "react";
import {
  FaLink,
  FaShieldAlt,
  FaChartBar,
  FaTrophy,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import BlurText from "../ui/BlurText";

const SolutionSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

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

  const solutions = [
    {
      title: "Conectar",
      description:
        "Integre todas as suas plataformas de comunicação em um só lugar",
      icon: FaLink,
      gradient: "from-primary-blue to-cyan-500",
      features: [
        { name: "WhatsApp", icon: FaWhatsapp },
        { name: "Instagram", icon: FaInstagram },
        { name: "Facebook", icon: FaFacebook },
        { name: "Telegram", icon: FaTelegram },
      ],
    },
    {
      title: "Defender",
      description:
        "Monitore e responda automaticamente a críticas e comentários",
      icon: FaShieldAlt,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "IA de Sentimento",
        "Respostas Automáticas",
        "Alertas Inteligentes",
      ],
    },
    {
      title: "Estratificar",
      description: "Organize e priorize mensagens por importância e urgência",
      icon: FaChartBar,
      gradient: "from-primary-purple to-violet-500",
      features: ["Categorização IA", "Priorização", "Relatórios"],
    },
    {
      title: "Vencer",
      description:
        "Transforme cada interação em uma oportunidade de conquistar votos",
      icon: FaTrophy,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Análise de Impacto",
        "Métricas de Engajamento",
        "ROI Político",
      ],
    },
  ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4">
      {/* Background effects */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="text-center mb-16 relative z-10">
        <BlurText
          text="Transforme cada interação em uma vitória"
          delay={15}
          animateBy="words"
          direction="top"
          className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
        />
      </div>

      {/* Solution cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/20">
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
              >
                <solution.icon className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {solution.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features list */}
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full`}
                    ></div>
                    {typeof feature === "string" ? (
                      <span className="text-sm text-gray-300">{feature}</span>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <feature.icon className="text-sm text-gray-400" />
                        <span className="text-sm text-gray-300">
                          {feature.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connection visualization */}
      <div className="mt-16 relative">
        <div className="flex justify-center items-center space-x-4 lg:space-x-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-full flex items-center justify-center text-lg mb-2`}
              >
                <solution.icon className="text-white" />
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {solution.title}
              </div>
              {index < solutions.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
