import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orthodox-navy to-orthodox-burgundy text-orthodox-cream py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">
            Светлица
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Православные церковные товары высокого качества
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Иконы, свечи, крестики, православные книги и церковная утварь.
            Освящённые товары с сертификатами качества.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gold text-orthodox-navy hover:bg-gold-dark text-lg px-8"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-orthodox-navy text-lg px-8"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Shield" size={40} className="text-gold mb-2" />
              <span className="text-sm">Освящённые товары</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Truck" size={40} className="text-gold mb-2" />
              <span className="text-sm">Быстрая доставка</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Award" size={40} className="text-gold mb-2" />
              <span className="text-sm">Сертификаты качества</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Gift" size={40} className="text-gold mb-2" />
              <span className="text-sm">Подарочная упаковка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
