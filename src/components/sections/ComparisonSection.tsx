import { useState, useEffect } from "react";
import { FaMobileAlt, FaChartBar, FaTimes, FaCheck } from "react-icons/fa";
import BlurText from "../ui/BlurText";

const ComparisonSection = () => {
  const [visibleSides, setVisibleSides] = useState<{
    left: boolean;
    right: boolean;
  }>({ left: false, right: false });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleSides((prev) => ({ ...prev, left: true }));
    }, 500);

    const timer2 = setTimeout(() => {
      setVisibleSides((prev) => ({ ...prev, right: true }));
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const leftSide = {
    title: "Seus concorrentes estão perdidos nas notificações",

    problems: [
      "Múltiplos dispositivos e aplicativos",
      "Notificações constantes e caóticas",
      "Mensagens perdidas e não respondidas",
      "Equipe sobrecarregada e estressada",
      "Falta de organização e priorização",
    ],
    visual: FaMobileAlt,
    color: "from-red-500 to-orange-500",
  };

  const rightSide = {
    title: "Você tem o controle da sua comunicação",

    benefits: [
      "Dashboard unificado e organizado",
      "IA que prioriza e categoriza mensagens",
      "Respostas automáticas inteligentes",
      "Equipe eficiente e focada",
      "Estratégias baseadas em dados",
    ],
    visual: FaChartBar,
    color: "from-green-500 to-primary-blue",
  };

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4">
      {/* Background effects */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="text-center mb-16 relative z-10">
        <BlurText
          text="A diferença é notável"
          delay={15}
          animateBy="words"
          direction="top"
          className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
        />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Veja como sua comunicação pode ser transformada
        </p>
      </div>

      {/* Comparison grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
        {/* Left side - Problems */}
        <div
          className={`lg:col-span-2 transform transition-all duration-700 ${
            visibleSides.left
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 h-full hover:border-red-500/50 transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 text-center w-full flex justify-center items-center text-red-500">
                <leftSide.visual />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {leftSide.title}
              </h3>
            </div>

            {/* Problems list */}
            <div className="space-y-4">
              {leftSide.problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    <FaTimes />
                  </div>
                  <span className="text-gray-300">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle separator */}
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
              VS
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
          </div>
        </div>

        {/* Right side - Benefits */}
        <div
          className={`lg:col-span-2 transform transition-all duration-700 ${
            visibleSides.right
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 h-full hover:border-green-500/50 transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 text-center w-full flex justify-center items-center text-green-500">
                <rightSide.visual />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {rightSide.title}
              </h3>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {rightSide.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    <FaCheck />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Qual lado você quer estar?
          </h3>
          <p className="text-gray-400 mb-6">
            A escolha é sua: continuar lutando contra a desorganização ou
            assumir o controle com a tecnologia certa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="https://wa.me/551151978485"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-gray-300 font-bold text-sm sm:text-base rounded-xl hover:border-gray-500 transition-colors duration-300 text-center"
            >
              Agendar Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
