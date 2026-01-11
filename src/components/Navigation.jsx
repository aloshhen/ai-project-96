import { motion } from 'framer-motion'
import { Menu, Wine } from 'lucide-react'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-bar-secondary/50 backdrop-blur-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Wine className="text-bar-accent" />
          <h1 className="text-xl font-bold text-white">Urban Lounge</h1>
        </div>
        <div className="space-x-4 hidden md:block">
          <a href="#menu" className="text-white hover:text-bar-accent transition">Меню</a>
          <a href="#reserve" className="text-white hover:text-bar-accent transition">Бронирование</a>
          <a href="#contacts" className="text-white hover:text-bar-accent transition">Контакты</a>
        </div>
        <Menu className="md:hidden text-white" />
      </div>
    </motion.nav>
  )
}