import { motion } from 'framer-motion'
import { Wine, Beer, Utensils, Coffee } from 'lucide-react'

const menuItems = [
  {
    icon: Wine,
    title: 'Коктейли',
    description: 'Авторские миксы от наших барменов'
  },
  {
    icon: Beer,
    title: 'Крафтовое пиво',
    description: 'Лучшие сорта со всего мира'
  },
  {
    icon: Utensils,
    title: 'Закуски',
    description: 'Идеальный акцент к вашему напитку'
  },
  {
    icon: Coffee,
    title: 'Горячие напитки',
    description: 'Согревающие напитки для холодных вечеров'
  }
]

export default function MenuSection() {
  return (
    <section className="bg-bar-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Наше <span className="text-bar-accent">Меню</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-bar-primary p-6 rounded-xl text-center"
            >
              <item.icon className="mx-auto mb-4 text-bar-accent" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}