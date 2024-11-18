import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud,
  faMobile
} from '@fortawesome/free-solid-svg-icons';

const paths = [
  {
    title: "Fundamentos",
    icon: faCode,
    color: "bg-blue-500",
    description: "HTML, CSS, JavaScript y conceptos básicos de programación",
    skills: ["HTML5", "CSS3", "JavaScript", "Git"]
  },
  {
    title: "Frontend",
    icon: faLaptopCode,
    color: "bg-purple-500",
    description: "Desarrollo de interfaces modernas y responsivas",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    icon: faServer,
    color: "bg-green-500",
    description: "Construcción de APIs y servicios robustos",
    skills: ["Node.js", "Express", "Java", "Spring Boot"]
  },
  {
    title: "Bases de Datos",
    icon: faDatabase,
    color: "bg-yellow-500",
    description: "Gestión y modelado de datos",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    title: "Cloud",
    icon: faCloud,
    color: "bg-cyan-500",
    description: "Despliegue y escalado de aplicaciones",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Mobile",
    icon: faMobile,
    color: "bg-red-500",
    description: "Desarrollo de aplicaciones móviles",
    skills: ["React Native", "Flutter", "iOS", "Android"]
  }
];

export default function LearningPath() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {paths.map((path, index) => (
        <motion.div
          key={path.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className={`w-12 h-12 ${path.color} rounded-lg flex items-center justify-center mb-4`}>
            <FontAwesomeIcon icon={path.icon} className="text-white w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">{path.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
          <div className="flex flex-wrap gap-2">
            {path.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}