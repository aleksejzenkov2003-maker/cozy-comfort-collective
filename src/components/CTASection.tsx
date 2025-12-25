import { Button } from "@/components/ui/button";
import { MapPin, Factory, ArrowRight, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Готовы подключить чулочно-носочную продукцию?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Оставьте заявку — мы подготовим персональное коммерческое предложение 
            и подберём оптимальный формат сотрудничества.
          </p>
          
          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-semibold text-primary-foreground">Офис</span>
              </div>
              <p className="text-primary-foreground/80">
                Метро Динамо, Ленинградский проспект 35, строение 2
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Factory className="w-5 h-5 text-accent" />
                <span className="font-semibold text-primary-foreground">Производство</span>
              </div>
              <p className="text-primary-foreground/80">
                600033, Владимирская область, г. Владимир, ул. Сущёвская, д. 39
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <FileText className="w-5 h-5" />
              Получить прайс
            </Button>
            <Button variant="hero-outline" size="xl">
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
