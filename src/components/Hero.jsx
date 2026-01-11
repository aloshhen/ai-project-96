import { motion } from 'framer-motion'
import { Star, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-bar-primary flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Urban <span className="text-bar-accent">Lounge</span> Bar
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Место, где каждый напиток - это история, а каждый вечер - незабываемое приключение
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-bar-accent text-black px-6 py-3 rounded-lg flex items-center space-x-2"
            >
              <Star className="mr-2" /> Забронировать стол
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-bar-accent text-bar-accent px-6 py-3 rounded-lg flex items-center space-x-2"
            >
              <Zap className="mr-2" /> Посмотреть меню
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img 
            src="https://source.unsplash.com/800x600/?cocktail,bar" 
            alt="Urban Lounge Bar" 
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}