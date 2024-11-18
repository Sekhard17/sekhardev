import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">¿Por qué Sekhard?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
          Sekhard nace de la combinación de "Seeker" (buscador) y "Hard" (difícil/duro), 
          representando mi constante búsqueda por desafíos y mi pasión por resolver 
          problemas complejos en el mundo del desarrollo de software.
        </p>
        <div className="space-y-4">
          {[
            {
              icon: faCode,
              title: "Desarrollo Full Stack",
              description: "Especializado en crear soluciones end-to-end con tecnologías modernas"
            },
            {
              icon: faLightbulb,
              title: "Innovación Constante",
              description: "Siempre explorando nuevas tecnologías y metodologías"
            },
            {
              icon: faHeart,
              title: "Pasión por Enseñar",
              description: "Compartiendo conocimiento y experiencias con la comunidad"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Coding"
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 dark:bg-primary-900 rounded-2xl -z-10"></div>
      </motion.div>
    </div>
  );
}