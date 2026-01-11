import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ReservationForm() {
  return (
    <section className="bg-bar-primary py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Забронируйте <span className="text-bar-accent">Стол</span>
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bar-secondary p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Ваше имя"
              className="w-full p-3 bg-bar-primary rounded-lg text-white"
            />
            <input 
              type="tel" 
              placeholder="Номер телефона"
              className="w-full p-3 bg-bar-primary rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <input 
              type="date" 
              className="w-full p-3 bg-bar-primary rounded-lg text-white"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-bar-accent text-black p-4 rounded-lg flex items-center justify-center"
          >
            <Star className="mr-2" /> Забронировать
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}