import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faCode, 
  faSadTear,
  faLaptopCode,
  faRocket,
  faArrowTrendUp,
  faLightbulb,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const timelineEvents = [
  {
    year: '2018',
    title: 'Inicio en la Universidad',
    description: 'Comencé la carrera de Ingeniería en Informática en INACAP Osorno.',
    icon: faGraduationCap,
    color: 'bg-blue-500'
  },
  {
    year: '2018',
    title: 'Primer Desafío',
    description: 'Reprobé Fundamentos de Programación, mi primer gran obstáculo que me enseñó la importancia de la perseverancia.',
    icon: faSadTear,
    color: 'bg-red-500'
  },
  {
    year: '2019',
    title: 'Redescubrimiento',
    description: 'Me enamoré de las Bases de Datos y volví a aprobar Fundamentos de Programación con una nueva perspectiva.',
    icon: faCode,
    color: 'bg-green-500'
  },
  {
    year: '2020',
    title: 'Exploración Web',
    description: 'Di mis primeros pasos en desarrollo web, descubriendo mi pasión por crear interfaces y soluciones digitales.',
    icon: faLaptopCode,
    color: 'bg-yellow-500'
  },
  {
    year: '2024',
    title: 'Nuevo Comienzo',
    description: 'Regreso a la universidad con una visión clara y determinación para completar mi formación académica.',
    icon: faRocket,
    color: 'bg-purple-500'
  },
  {
    year: '2024',
    title: 'Crecimiento Tecnológico',
    description: 'Dominio de tecnologías modernas como Astro, React y Tailwind CSS, expandiendo mis horizontes como desarrollador.',
    icon: faArrowTrendUp,
    color: 'bg-cyan-500'
  }
];

const mentors = [
  {
    name: "Alex Rocha",
    role: "Profesor INACAP Osorno",
    description: "Mentor excepcional que me guió en los fundamentos de la programación y me ayudó a descubrir mi potencial.",
    image: "/alex-rocha.jpg",
    expertise: ["Programación", "Bases de Datos", "Arquitectura de Software"]
  },
  {
    name: "Javier Elgueta",
    role: "Profesor INACAP Osorno",
    description: "Inspirador maestro que me introdujo al mundo del desarrollo web y me motivó a buscar la excelencia.",
    image: "/javier-elgueta.jpg",
    expertise: ["Desarrollo Web", "JavaScript", "Metodologías Ágiles"]
  }
];

export default function Timeline() {
  return (
    <div className="space-y-20">
      {/* Timeline Section */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-900 rounded-full"></div>
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="mb-1 text-sm font-bold text-primary-600 dark:text-primary-400">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>

              <div className="relative flex items-center justify-center w-12 h-12">
                <div className={`absolute w-10 h-10 ${event.color} rounded-xl shadow-lg transform rotate-45`}></div>
                <FontAwesomeIcon 
                  icon={event.icon} 
                  className="w-5 h-5 text-white z-10 transform -rotate-45"
                />
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div className="pt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Mentores que Inspiraron mi Camino</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-3">{mentor.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{mentor.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}