import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Fecha o menu mobile após clicar
  };

  // Menu items
  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "problem", label: "Problema" },
    { id: "solution", label: "Solução" },
    { id: "benefits", label: "Benefícios" },
    { id: "target", label: "Público" },
    { id: "differentiators", label: "Diferenciais" },
    { id: "comparison", label: "Comparação" },
    { id: "cta", label: "Contato" },
  ];

  return (
    <header className="w-full px-3 py-4 z-[999] sticky top-0 backdrop-blur-xl bg-[#010314]/80 border-b border-gray-800/50">
      <nav className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo_genia_matrix.png" className="h-10" alt="Logo" />
            <div className="flex flex-col gap-0">
              <span className="text-lg font-bold text-title leading-none">
                GenIA Matrix
              </span>
              <span className="text-base leading-none bg-gradient-to-bl from-primary-blue via-primary-purple to-white bg-clip-text text-transparent inline-block">
                Conecta
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-30 cursor-pointer hover:text-white transition-colors duration-300 font-medium text-sm relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden h-full border-t border-gray-800/50"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col gap-3 pt-4 pb-4"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + 0.1,
                    }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm w-full text-left py-2 px-3 hover:bg-gray-800/30 rounded-lg"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
