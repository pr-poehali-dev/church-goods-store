import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const categories = [
  {
    id: 1,
    name: "Иконы",
    description: "Рукописные и печатные иконы, иконостасы",
    icon: "Image",
    items: "150+ товаров",
    featured: true,
  },
  {
    id: 2,
    name: "Свечи церковные",
    description: "Восковые свечи различных размеров",
    icon: "Flame",
    items: "50+ товаров",
  },
  {
    id: 3,
    name: "Крестики и подвески",
    description: "Нательные крестики из серебра и золота",
    icon: "Plus",
    items: "80+ товаров",
  },
  {
    id: 4,
    name: "Православные книги",
    description: "Молитвословы, жития святых, духовная литература",
    icon: "BookOpen",
    items: "200+ товаров",
    featured: true,
  },
  {
    id: 5,
    name: "Ладан и благовония",
    description: "Натуральный ладан и церковные благовония",
    icon: "Sparkles",
    items: "30+ товаров",
  },
  {
    id: 6,
    name: "Церковная утварь",
    description: "Лампады, кадила, подсвечники",
    icon: "Lightbulb",
    items: "70+ товаров",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orthodox-navy mb-4">
            Категории товаров
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент церковных товаров для православных христиан
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                category.featured
                  ? "ring-2 ring-gold bg-orthodox-cream"
                  : "hover:ring-2 hover:ring-gold"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      category.featured
                        ? "bg-gold text-orthodox-navy"
                        : "bg-orthodox-navy text-white"
                    } group-hover:bg-gold group-hover:text-orthodox-navy transition-colors`}
                  >
                    <Icon name={category.icon as any} size={24} />
                  </div>
                  {category.featured && (
                    <span className="bg-gold text-orthodox-navy text-xs px-2 py-1 rounded-full font-medium">
                      Популярное
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-orthodox-navy mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gold font-medium">
                    {category.items}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-orthodox-navy hover:text-gold"
                  >
                    Смотреть
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orthodox-navy text-white hover:bg-orthodox-burgundy"
          >
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
}
