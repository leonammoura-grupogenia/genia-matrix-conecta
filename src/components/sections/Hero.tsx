import { useState } from "react";
import BlurText from "../ui/BlurText";
import { FaArrowRight } from "react-icons/fa";
import Lottie from "react-lottie";
import heroAnimation from "../../assets/Ghostsmart.json";

const Hero = () => {
  const [isFinishedFirstHeadline, setIsFinishedFirstHeadline] = useState(false);
  const [isFinishedSecondHeadline, setIsFinishedSecondHeadline] =
    useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full relative flex items-center min-h-[75vh] overflow-hidden">
      {/* Blush animados */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/15 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <section className="w-full max-w-7xl mx-auto relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col text-center lg:text-left flex-1 animate-slide-in-up">
            <BlurText
              text="A política mudou."
              delay={25}
              animateBy="letters"
              direction="top"
              className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-white/90 to-white bg-clip-text text-transparent inline-block"
              onAnimationComplete={() => setIsFinishedFirstHeadline(true)}
            />

            {isFinishedFirstHeadline && (
              <BlurText
                text="Sua estratégia também precisa."
                delay={12}
                animateBy="words"
                direction="top"
                className="text-3xl lg:text-5xl font-bold text-title bg-gradient-to-t from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block prevent-word-break"
                onAnimationComplete={() => setIsFinishedSecondHeadline(true)}
              />
            )}

            {isFinishedSecondHeadline && (
              <>
                <span className="text-base lg:text-2xl text-white inline-block mt-3">
                  Genia Matrix Conecta: Conectando Mandatos. Conquistando Votos
                </span>
                <div className="mt-8">
                  <a
                    href="https://wa.me/551151978485"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer relative inline-flex w-full sm:w-auto mx-auto lg:mx-0 px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-bold text-sm sm:text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-purple/50 animate-pulse-glow"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                      <span className="text-center">
                        Agende uma Demonstração Exclusiva
                      </span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 rounded-xl animate-shimmer"></div>
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="flex-1">
            {/* <img
              src="/hero_image.png"
              alt="Hero Image"
              className="w-full h-full object-cover gentle-bounce"
            /> */}
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
