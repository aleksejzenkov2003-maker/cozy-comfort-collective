import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <div 
            className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            ООО ВИКТОРИЯ
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Чулочно-носочная продукция для стабильных продаж
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Базовый ассортимент носков, чулок и колготок с розничными ценами на уровне Wildberries
          </p>
          
          <p 
            className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Практичная и востребованная категория повседневного спроса. Продукция ориентирована на массового покупателя, отличается высокой оборачиваемостью и простым позиционированием.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl">
              Посмотреть прайс
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Получить коммерческое предложение
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
