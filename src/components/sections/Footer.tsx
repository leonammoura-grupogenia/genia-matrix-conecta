import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const quickLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "contato@geniamatrix.com",
      href: "mailto:contato@geniamatrix.com",
    },
    { icon: FaPhone, label: "(11) 99999-9999", href: "tel:+5511999999999" },
    { icon: FaMapMarkerAlt, label: "São Paulo, SP", href: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "YouTube", icon: FaYoutube, href: "#" },
  ];

  return (
    <footer className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Genia Matrix</h3>
                <p className="text-gray-400 text-sm">Conecta</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transformando a comunicação política através de tecnologia
              avançada e inteligência artificial. Conectando mandatos,
              conquistando votos.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-purple/20 transition-all duration-300 group"
                  onMouseEnter={() => setHoveredLink(social.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <social.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`w-1 h-1 bg-primary-purple rounded-full transition-all duration-300 ${
                        hoveredLink === link.name ? "w-3" : "w-1"
                      }`}
                    ></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contatos</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-3 group"
                    onMouseEnter={() => setHoveredLink(contact.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <contact.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h4>
            <p className="text-gray-400 mb-6">
              Receba insights exclusivos sobre comunicação política e tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors duration-300"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-semibold text-sm sm:text-base rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2">
                <span>Inscrever</span>
                <FaArrowRight className="text-sm flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Genia Matrix. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-primary-purple rounded-full animate-pulse opacity-60"></div>
      <div
        className="absolute bottom-10 left-10 w-3 h-3 bg-primary-blue rounded-full animate-pulse opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
    </footer>
  );
};

export default Footer;
