import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

const courses = [
  {
    title: "React desde Cero",
    description: "Aprende React.js desde los fundamentos hasta conceptos avanzados",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    duration: "20 horas",
    students: 1234,
    rating: 4.8,
    level: "Principiante"
  },
  {
    title: "Node.js Avanzado",
    description: "Domina el desarrollo backend con Node.js y Express",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    duration: "15 horas",
    students: 856,
    rating: 4.9,
    level: "Avanzado"
  },
  {
    title: "TypeScript Práctico",
    description: "Mejora tus habilidades de JavaScript con TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    duration: "12 horas",
    students: 678,
    rating: 4.7,
    level: "Intermedio"
  }
];

export default function CourseSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <motion.div
          key={course.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2">
                <FontAwesomeIcon icon={faPlay} />
                Ver Curso
              </button>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {course.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} />
                {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUsers} />
                {course.students} estudiantes
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                {course.rating}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                {course.level}
              </span>
              <button className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300">
                Más información
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}