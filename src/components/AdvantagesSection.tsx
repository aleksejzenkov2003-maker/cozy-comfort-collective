import { 
  TrendingUp, 
  RefreshCw, 
  CheckCircle2, 
  Wallet, 
  ShoppingCart, 
  Rocket 
} from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "Постоянный спрос",
    description: "Без сезонных провалов"
  },
  {
    icon: RefreshCw,
    title: "Высокая оборачиваемость",
    description: "Быстрые продажи товара"
  },
  {
    icon: CheckCircle2,
    title: "Понятный ассортимент",
    description: "Без сложного выбора"
  },
  {
    icon: Wallet,
    title: "Конкурентные цены",
    description: "Розничные цены рынка"
  },
  {
    icon: ShoppingCart,
    title: "Универсальность",
    description: "Для маркетплейсов и розницы"
  },
  {
    icon: Rocket,
    title: "Быстрый старт",
    description: "Минимум времени на запуск"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-secondary/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 text-center">
          Почему выбирают эту категорию
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Ключевые преимущества работы с чулочно-носочной продукцией
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
