import { useState, useEffect } from "react";
import { FaCheck, FaBolt, FaBullseye } from "react-icons/fa";
import BlurText from "../ui/BlurText";

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Generate particles for background effect
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 w-full max-w-7xl mx-auto relative px-4 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-purple rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "3s",
            }}
          ></div>
        ))}
      </div>

      {/* Background effects */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main headline */}
          <BlurText
            text="Esteja à frente. Conecte-se. Vença."
            delay={20}
            animateBy="words"
            direction="top"
            className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
          />

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Não deixe seus concorrentes te ultrapassarem. Transforme sua
            comunicação política hoje mesmo e conquiste os votos que você
            merece.
          </p>

          {/* Giant CTA Button */}
          <div className="mb-12 px-4">
            <a
              href="https://wa.me/551151978485"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-lg mx-auto px-6 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-bold text-base sm:text-base lg:text-xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-purple/50 animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                <span className="text-center">
                  Solicite sua Demonstração Exclusiva
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                  →
                </span>
              </span>

              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl animate-shimmer"></div>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <FaCheck className="text-green-500 text-xl" />
              </div>
              <span className="text-gray-300 font-medium">
                Demonstração Gratuita
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center">
                <FaBolt className="text-primary-blue text-xl" />
              </div>
              <span className="text-gray-300 font-medium">Setup em 24h</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary-purple/20 rounded-full flex items-center justify-center">
                <FaBullseye className="text-primary-purple text-xl" />
              </div>
              <span className="text-gray-300 font-medium">
                Suporte Especializado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-purple rounded-full animate-bounce opacity-60"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-primary-blue rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-5 h-5 bg-primary-purple rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-2 h-2 bg-primary-blue rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(180, 43, 209, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 43, 209, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default FinalCTASection;
