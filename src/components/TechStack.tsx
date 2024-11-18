import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJs, faReact, faJava, faNode, faGit,
  faPython, faDocker, faAws
} from '@fortawesome/free-brands-svg-icons';

const technologies = [
  { icon: faJs, name: 'JavaScript', color: '#F7DF1E' },
  { icon: faReact, name: 'React', color: '#61DAFB' },
  { icon: faJava, name: 'Java', color: '#007396' },
  { icon: faNode, name: 'Node.js', color: '#339933' },
  { icon: faGit, name: 'Git', color: '#F05032' },
  { icon: faPython, name: 'Python', color: '#3776AB' },
  { icon: faDocker, name: 'Docker', color: '#2496ED' },
  { icon: faAws, name: 'AWS', color: '#FF9900' }
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center group"
        >
          <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
            <FontAwesomeIcon 
              icon={tech.icon} 
              className="w-12 h-12"
              style={{ color: tech.color }}
            />
          </div>
          <span className="mt-3 font-medium text-gray-700 dark:text-gray-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}