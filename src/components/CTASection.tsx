import { MapPin, Factory } from "lucide-react";
import RequestForm from "./RequestForm";

const CTASection = () => {
  return (
    <section id="request-form" className="py-16 md:py-24 lg:py-28 gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 md:right-20 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 md:left-20 w-64 md:w-80 h-64 md:h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
              Готовы подключить чулочно-носочную продукцию?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Оставьте заявку — мы подготовим персональное коммерческое предложение 
              и подберём оптимальный формат сотрудничества.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">
                  Оставить заявку
                </h3>
                <RequestForm />
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-primary-foreground text-lg">Офис</span>
                </div>
                <p className="text-primary-foreground/80 text-sm sm:text-base">
                  Метро Динамо, Ленинградский проспект 35, строение 2
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-primary-foreground text-lg">Производство</span>
                </div>
                <p className="text-primary-foreground/80 text-sm sm:text-base">
                  600033, Владимирская область, г. Владимир, ул. Сущёвская, д. 39
                </p>
              </div>
              
              <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-accent/20">
                <h4 className="font-semibold text-primary-foreground mb-2">Быстрая связь</h4>
                <a 
                  href="tel:+79202616645" 
                  className="text-xl sm:text-2xl font-bold text-accent hover:text-accent/80 transition-colors block mb-2"
                >
                  +7 920 261 6645
                </a>
                <p className="text-primary-foreground/80 text-sm sm:text-base">
                  Или заполните форму, и мы свяжемся с вами в течение 1 рабочего дня
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
