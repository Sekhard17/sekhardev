import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLightbulb, 
  faCheck,
  faArrowRight,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

const challenge = {
  title: "Invertir una Cadena",
  difficulty: "Fácil",
  description: "Escribe una función que invierta una cadena de texto sin usar el método reverse().",
  example: "Input: 'hello' → Output: 'olleh'",
  testCases: [
    { input: "'hello'", output: "'olleh'" },
    { input: "'world'", output: "'dlrow'" }
  ],
  hints: [
    "Piensa en recorrer la cadena desde el final",
    "Puedes usar un bucle for o reducir el array de caracteres"
  ]
};

export default function DailyChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [code, setCode] = useState('');
  const [currentHint, setCurrentHint] = useState(0);
  const [showHint, setShowHint] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faTrophy} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{challenge.title}</h3>
              <span className="text-primary-200 text-sm">{challenge.difficulty}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4 mr-2" />
              Pista
            </button>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faCode} className="w-4 h-4 mr-2" />
              {showSolution ? 'Ocultar' : 'Ver'} Solución
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {challenge.description}
        </p>

        {/* Test Cases */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6">
          <h4 className="font-bold mb-2">Casos de Prueba:</h4>
          <div className="space-y-2">
            {challenge.testCases.map((testCase, index) => (
              <div key={index} className="flex items-center gap-2 font-mono text-sm">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary-600 w-3 h-3" />
                <span>{testCase.input} → {testCase.output}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="mb-6">
          <div className="bg-gray-900 rounded-t-lg p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-sm">script.js</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-40 p-4 bg-gray-900 font-mono text-gray-100 text-sm focus:outline-none"
            placeholder="// Escribe tu solución aquí"
          />
        </div>

        {/* Hints */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6"
          >
            <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary-700 dark:text-primary-300">
                <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
                <span className="font-medium">Pista {currentHint + 1}:</span>
              </div>
              <p className="mt-2 text-primary-600 dark:text-primary-400">
                {challenge.hints[currentHint]}
              </p>
              {challenge.hints.length > 1 && (
                <button
                  onClick={() => setCurrentHint((prev) => (prev + 1) % challenge.hints.length)}
                  className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Siguiente pista →
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Solution */}
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h4 className="font-bold mb-2">Solución:</h4>
              <pre className="text-sm font-mono overflow-x-auto">
                <code>{`function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}