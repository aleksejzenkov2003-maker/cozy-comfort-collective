import { Check } from "lucide-react";

const features = [
  "Фиксированная цена",
  "Понятная номенклатура",
  "Быстрый запуск",
  "Масштабируемость ассортимента"
];

const CooperationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Формат сотрудничества
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              Продукция поставляется в готовом к продаже виде. Ассортимент легко интегрируется 
              в существующий каталог и не требует дополнительного обучения персонала.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
