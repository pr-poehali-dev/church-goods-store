import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-orthodox-navy text-orthodox-cream shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Church" size={32} className="text-gold" />
            <h1 className="text-2xl font-bold text-gold">Светлица</h1>
            <span className="text-sm opacity-80">Церковные товары</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gold transition-colors">
              Главная
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Каталог
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Корзина
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Доставка
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gold text-gold hover:bg-gold hover:text-orthodox-navy"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
            <Button className="md:hidden" variant="ghost">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
