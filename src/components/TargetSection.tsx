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
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Кому подойдёт данное решение
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Данная категория оптимальна для различных форматов бизнеса
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <target.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {target.title}
                </h3>
                <p className="text-muted-foreground">
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
