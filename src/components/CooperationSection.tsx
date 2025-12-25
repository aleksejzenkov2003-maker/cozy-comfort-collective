import { Check } from "lucide-react";

const features = [
  "Фиксированная цена",
  "Понятная номенклатура",
  "Быстрый запуск",
  "Масштабируемость ассортимента"
];

const CooperationSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Формат сотрудничества
          </h2>
          
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-card">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 md:mb-8">
              Продукция поставляется в готовом к продаже виде. Ассортимент легко интегрируется 
              в существующий каталог и не требует дополнительного обучения персонала.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-lg bg-primary/5"
                >
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground">{feature}</span>
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
