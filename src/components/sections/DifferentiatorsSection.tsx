import { useState, useEffect } from "react";
import {
  FaBuilding,
  FaRobot,
  FaBrain,
  FaGlobe,
  FaBolt,
  FaChartBar,
} from "react-icons/fa";
import BlurText from "../ui/BlurText";

const DifferentiatorsSection = () => {
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

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const differentiators = [
    {
      title: "Gabinete Digital Unificado 24h",
      description:
        "Um centro de comando digital que funciona 24 horas por dia, 7 dias por semana, integrando todas as suas plataformas de comunicação em uma única interface inteligente.",
      icon: FaBuilding,
      gradient: "from-primary-blue to-cyan-500",
      features: [
        "Integração com WhatsApp, Instagram, Facebook, Telegram",
        "Monitoramento em tempo real de todas as interações",
        "Dashboard unificado com métricas em tempo real",
        "Alertas inteligentes para situações críticas",
      ],
      visual: FaGlobe,
    },
    {
      title: "Sua Equipe Digital",
      description:
        "IA avançada que atua como uma equipe digital completa, respondendo automaticamente, categorizando mensagens e priorizando ações baseadas em inteligência artificial.",
      icon: FaRobot,
      gradient: "from-primary-purple to-violet-500",
      features: [
        "IA de processamento de linguagem natural",
        "Respostas automáticas personalizadas",
        "Categorização inteligente de mensagens",
        "Priorização baseada em urgência e importância",
      ],
      visual: FaBolt,
    },
    {
      title: "Seu Estrategista Particular de IA",
      description:
        "Um consultor digital que analisa padrões, sugere estratégias e otimiza sua comunicação política baseado em dados e tendências em tempo real.",
      icon: FaBrain,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Análise de sentimento em tempo real",
        "Sugestões estratégicas personalizadas",
        "Previsão de tendências e oportunidades",
        "Relatórios detalhados de performance",
      ],
      visual: FaChartBar,
    },
  ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4">
      {/* Background effects */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="text-center mb-16 relative z-10">
        <BlurText
          text="Nossos Diferenciais"
          delay={15}
          animateBy="words"
          direction="top"
          className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
        />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          O que nos torna únicos no mercado de comunicação política
        </p>
      </div>

      {/* Differentiators cards */}
      <div className="space-y-12">
        {differentiators.map((diff, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12 hover:border-gray-700 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content side */}
                <div className="space-y-6">
                  {/* Icon and title */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${diff.gradient} rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <diff.icon className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {diff.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {diff.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {diff.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${diff.gradient} rounded-full mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className="flex justify-center lg:justify-end">
                  <div
                    className={`w-64 h-64 bg-gradient-to-br ${diff.gradient} rounded-3xl flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  >
                    <diff.visual className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom highlight */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            A combinação perfeita de tecnologia e estratégia política
          </h3>
          <p className="text-gray-400">
            Nossa plataforma não é apenas uma ferramenta, é um ecossistema
            completo que transforma a forma como você se comunica e se conecta
            com seus eleitores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
