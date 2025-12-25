import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center gradient-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <div 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-xs sm:text-sm font-medium backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            ООО ВИКТОРИЯ
          </div>
          
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Чулочно-носочная продукция для стабильных продаж
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-medium mb-3 sm:mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Базовый ассортимент носков, чулок и колготок с розничными ценами на уровне Wildberries
          </p>
          
          <p 
            className="text-sm sm:text-base md:text-lg text-primary-foreground/70 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Практичная и востребованная категория повседневного спроса. Продукция ориентирована на массового покупателя, отличается высокой оборачиваемостью и простым позиционированием.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={scrollToForm}>
              Посмотреть прайс
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" onClick={scrollToForm}>
              Получить предложение
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
