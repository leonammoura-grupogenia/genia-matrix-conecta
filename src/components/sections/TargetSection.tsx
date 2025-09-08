import { useState, useEffect } from "react";
import { FaUserTie, FaUsers, FaMobileAlt, FaBullseye } from "react-icons/fa";
import BlurText from "../ui/BlurText";

const TargetSection = () => {
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

  const targets = [
    {
      title: "Lideranças Políticas",
      subtitle: "Vereadores a Presidente",
      description:
        "Para políticos que querem se conectar efetivamente com seus eleitores e construir relacionamentos duradouros",
      icon: FaUserTie,
      gradient: "from-primary-blue to-cyan-500",
      features: [
        "Gestão de Mandato",
        "Comunicação Direta",
        "Relacionamento com Eleitores",
      ],
    },
    {
      title: "Equipes Estratégicas",
      subtitle: "Gabinetes e Assessorias",
      description:
        "Para equipes que precisam de eficiência e organização na comunicação política",
      icon: FaUsers,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Workflow Organizado",
        "Colaboração Eficiente",
        "Relatórios Detalhados",
      ],
    },
    {
      title: "Comunicação & Marketing",
      subtitle: "Político Digital",
      description:
        "Para profissionais que querem maximizar o impacto das campanhas digitais",
      icon: FaMobileAlt,
      gradient: "from-primary-purple to-violet-500",
      features: [
        "Campanhas Digitais",
        "Análise de Dados",
        "Otimização de Conteúdo",
      ],
    },
    {
      title: "Assessorias Políticas",
      subtitle: "Consultoria Especializada",
      description:
        "Para consultores que precisam de ferramentas avançadas para seus clientes",
      icon: FaBullseye,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Gestão Multi-Cliente",
        "Relatórios Avançados",
        "Estratégias Personalizadas",
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
          text="Para quem está na arena para vencer"
          delay={15}
          animateBy="words"
          direction="top"
          className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
        />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Nossa plataforma atende diferentes perfis profissionais da política
        </p>
      </div>

      {/* Target cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {targets.map((target, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300 group hover:scale-[1.01]">
              {/* Header with icon and titles */}
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${target.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <target.icon className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {target.title}
                  </h3>
                  <div
                    className={`text-sm font-medium bg-gradient-to-r ${target.gradient} bg-clip-text text-transparent`}
                  >
                    {target.subtitle}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {target.description}
              </p>

              {/* Features list */}
              <div className="space-y-3">
                {target.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${target.gradient} rounded-full`}
                    ></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section with additional info */}
      <div className="mt-16 text-center">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Independente do seu perfil, temos a solução ideal
          </h3>
          <p className="text-gray-400 mb-6">
            Nossa plataforma se adapta às necessidades específicas de cada tipo
            de usuário, oferecendo funcionalidades personalizadas e suporte
            especializado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Plano Básico",
              "Plano Profissional",
              "Plano Empresarial",
              "Consultoria Personalizada",
            ].map((plan, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700"
              >
                {plan}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
