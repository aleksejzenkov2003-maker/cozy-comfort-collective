import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const priceData = [
  { product: "Носки детские", description: "стандартные хлопковые", price: "178 ₽" },
  { product: "Носки детские", description: "базовая модель", price: "181 ₽" },
  { product: "Носки женские/мужские", description: "повседневные", price: "290 ₽" },
  { product: "Колготки детские", description: "тонкие, повседневные", price: "254 ₽" },
  { product: "Колготки детские (для девочек)", description: "стандартные", price: "250 ₽" },
  { product: "Колготки детские (для мальчиков)", description: "базовые", price: "237 ₽" },
  { product: "Колготки женские", description: "классические капроновые", price: "600 ₽" },
  { product: "Колготки женские", description: "базовая модель", price: "516 ₽" },
];

const PriceSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 text-center">
          Ассортимент и розничные цены
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          Ниже представлены фиксированные розничные цены на основные товарные позиции. 
          Стоимость соответствует среднему уровню продаж на Wildberries.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden sm:block bg-card rounded-2xl shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5 hover:bg-primary/5">
                  <TableHead className="text-foreground font-bold text-sm md:text-base py-3 md:py-4">Товар</TableHead>
                  <TableHead className="text-foreground font-bold text-sm md:text-base py-3 md:py-4">Описание</TableHead>
                  <TableHead className="text-foreground font-bold text-sm md:text-base py-3 md:py-4 text-right">Цена</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="hover:bg-secondary/50 transition-colors"
                  >
                    <TableCell className="font-medium py-3 md:py-4 text-sm md:text-base">{item.product}</TableCell>
                    <TableCell className="text-muted-foreground py-3 md:py-4 text-sm md:text-base">{item.description}</TableCell>
                    <TableCell className="text-right font-bold text-primary py-3 md:py-4 text-sm md:text-base">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3">
            {priceData.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-4 shadow-card"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-foreground text-sm flex-1 pr-2">{item.product}</h3>
                  <span className="font-bold text-primary text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4 md:mt-6">
            * Цены указаны за единицу товара
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
