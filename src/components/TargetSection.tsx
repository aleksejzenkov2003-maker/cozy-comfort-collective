import { Store, Globe, ShoppingBag, BarChart3 } from "lucide-react";

const targets = [
  {
    icon: ShoppingBag,
    title: "Продавцы на маркетплейсах",
    description: "Wildberries, Ozon"
  },
  {
    icon: Store,
    title: "Розничные магазины",
    description: "Магазины одежды и белья"
  },
  {
    icon: Globe,
    title: "Интернет-магазины",
    description: "С массовым ассортиментом"
  },
  {
    icon: BarChart3,
    title: "Стабильный бизнес",
    description: "Ориентированный на прогнозируемые продажи"
  }
];

const TargetSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-secondary/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 text-center">
          Кому подойдёт данное решение
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Данная категория оптимальна для различных форматов бизнеса
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 sm:gap-4 bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <target.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 sm:mb-1">
                  {target.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {target.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
