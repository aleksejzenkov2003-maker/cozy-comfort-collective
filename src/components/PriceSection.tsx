import { useState } from "react";
import { Package, Sparkles, ChevronDown } from "lucide-react";

const priceData = [
  { 
    id: 1,
    category: "Носки",
    icon: "🧦",
    items: [
      { product: "Носки детские", description: "стандартные хлопковые", price: 178 },
      { product: "Носки детские", description: "базовая модель", price: 181 },
      { product: "Носки женские/мужские", description: "повседневные", price: 290 },
    ]
  },
  { 
    id: 2,
    category: "Колготки детские",
    icon: "👶",
    items: [
      { product: "Колготки детские", description: "тонкие, повседневные", price: 254 },
      { product: "Колготки для девочек", description: "стандартные", price: 250 },
      { product: "Колготки для мальчиков", description: "базовые", price: 237 },
    ]
  },
  { 
    id: 3,
    category: "Колготки женские",
    icon: "👠",
    items: [
      { product: "Колготки женские", description: "классические капроновые", price: 600 },
      { product: "Колготки женские", description: "базовая модель", price: 516 },
    ]
  }
];

const PriceSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Фиксированные цены</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Ассортимент и цены
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Стоимость соответствует среднему уровню продаж на Wildberries
          </p>
        </div>
        
        {/* Price Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {priceData.map((category, categoryIndex) => (
            <div 
              key={category.id}
              className="group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-4 sm:p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl sm:text-3xl">
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.items.length} позиций
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1 text-primary font-semibold">
                    <span className="text-sm">от</span>
                    <span className="text-xl">
                      {Math.min(...category.items.map(i => i.price))} ₽
                    </span>
                  </div>
                  <div 
                    className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedCategory === category.id 
                    ? 'max-h-[500px] opacity-100 mt-2' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const itemKey = `${category.id}-${itemIndex}`;
                    return (
                      <div
                        key={itemIndex}
                        onMouseEnter={() => setHoveredItem(itemKey)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`
                          relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer
                          ${hoveredItem === itemKey 
                            ? 'bg-primary/10 scale-[1.02] shadow-lg' 
                            : 'bg-card hover:bg-secondary/50'
                          }
                        `}
                        style={{ 
                          animationDelay: `${itemIndex * 0.05}s`,
                          transform: expandedCategory === category.id ? 'translateY(0)' : 'translateY(-10px)'
                        }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Package className={`w-4 h-4 transition-colors ${
                                hoveredItem === itemKey ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                              <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">
                                {item.product}
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground pl-6">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className={`
                              px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-base sm:text-lg transition-all duration-300
                              ${hoveredItem === itemKey 
                                ? 'bg-primary text-primary-foreground scale-110' 
                                : 'bg-primary/10 text-primary'
                              }
                            `}>
                              {item.price} ₽
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative line */}
                        <div 
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300 ${
                            hoveredItem === itemKey 
                              ? 'h-3/4 bg-primary' 
                              : 'h-0 bg-transparent'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-8 md:mt-12">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Цены указаны за единицу товара
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
