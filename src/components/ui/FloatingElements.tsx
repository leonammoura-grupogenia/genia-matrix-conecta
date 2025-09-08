import { useEffect, useState } from "react";
import {
  FaRocket,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaNetworkWired,
  FaCog,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  icon: any;
  size: number;
  speed: number;
  delay: number;
  color: string;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const icons = [
      FaRocket,
      FaBrain,
      FaChartLine,
      FaShieldAlt,
      FaNetworkWired,
      FaCog,
      FaLightbulb,
      FaBullseye,
    ];

    const colors = [
      "#b42bd1",
      "#230fbf",
      "#8b5cf6",
      "#06b6d4",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#ec4899",
    ];

    const newElements: FloatingElement[] = Array.from(
      { length: 12 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.2,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    );

    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${10 / element.speed}s`,
          }}
        >
          <element.icon
            size={element.size}
            style={{ color: element.color }}
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
