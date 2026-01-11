import { Wine, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bar-secondary py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Wine className="text-bar-accent" />
            <h3 className="text-xl font-bold text-white">Urban Lounge</h3>
          </div>
          <p className="text-gray-300">Место, где рождаются незабываемые вечера</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Контакты</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="text-bar-accent" size={20} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-bar-accent" size={20} />
              <span>г. Москва, ул. Барная, 10</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Часы работы</h4>
          <div className="text-gray-300">
            <p>Пн-Чт: 18:00 - 00:00</p>
            <p>Пт-Сб: 18:00 - 03:00</p>
            <p>Вс: Выходной</p>
          </div>
        </div>
      </div>
    </footer>
  )
}