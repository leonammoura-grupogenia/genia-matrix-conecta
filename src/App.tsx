import Header from "./components/ui/Header";
import Hero from "./components/sections/Hero";
import ProblemSection from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import TargetSection from "./components/sections/TargetSection";
import DifferentiatorsSection from "./components/sections/DifferentiatorsSection";
import ComparisonSection from "./components/sections/ComparisonSection";
import FinalCTASection from "./components/sections/FinalCTASection";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <main className="w-full relative">
      <Header />
      <div className="w-full relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="target">
          <TargetSection />
        </div>
        <div id="differentiators">
          <DifferentiatorsSection />
        </div>
        <div id="comparison">
          <ComparisonSection />
        </div>
        <div id="cta">
          <FinalCTASection />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
