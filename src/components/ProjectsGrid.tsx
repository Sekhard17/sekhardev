import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDatabase, faCode, faBoxes } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "Sistema de Reserva de Canchas",
    client: "Matices Osorno",
    description: "Plataforma web para gestión y reserva de canchas deportivas",
    image: "https://images.unsplash.com/photo-1524769876592-f0aabc3f7074",
    tech: ["Vite.js", "Express.js", "Supabase"],
    icon: faCode
  },
  {
    title: "Sistema de Control y Distribución de Inventario",
    client: "Sur Innova Limitada",
    description: "Aplicación web para gestión de inventario y distribución",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    tech: ["Vite.js", "Tailwind CSS", "TypeScript", "Supabase"],
    icon: faBoxes
  },
  {
    title: "Sistema de Custodia de Objetos",
    client: "Sur Innova Limitada",
    description: "Sistema para control y seguimiento de objetos en custodia",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    tech: ["PHP", "MySQL"],
    icon: faDatabase
  }
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute top-4 right-4 z-10">
            <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={project.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-sm text-primary-200 font-medium">
                {project.client}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
            >
              Ver Detalles
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}