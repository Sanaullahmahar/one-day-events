import { useState, useEffect } from "react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingText = ({ words, interval = 3000, className = "" }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-400 ${
        isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  );
};

export default RotatingText;
