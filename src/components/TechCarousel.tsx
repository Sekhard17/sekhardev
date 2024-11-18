import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const techImages = [
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    name: 'Python'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    name: 'Java'
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    name: 'Docker'
  }
];

const initialPositions = techImages.map((_, index) => ({
  left: (index * 20) % 100,
  top: (index * 15) % 100
}));

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPositions(techImages.map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100
    })));
  }, []);

  return (
    <div className="relative w-full h-[30vh] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 md:w-24 md:h-24"
        >
          <img
            src={techImages[currentIndex].url}
            alt={techImages[currentIndex].name}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
      
      <div className="absolute inset-0">
        {techImages.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.url}
            alt={tech.name}
            className="absolute w-10 h-10 opacity-40"
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${positions[index].left}%`,
              top: `${positions[index].top}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}