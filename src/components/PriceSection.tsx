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
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Ассортимент и розничные цены
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Ниже представлены фиксированные розничные цены на основные товарные позиции. 
          Стоимость соответствует среднему уровню продаж на Wildberries.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5 hover:bg-primary/5">
                  <TableHead className="text-foreground font-bold text-base py-4">Товар</TableHead>
                  <TableHead className="text-foreground font-bold text-base py-4">Описание</TableHead>
                  <TableHead className="text-foreground font-bold text-base py-4 text-right">Цена</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="hover:bg-secondary/50 transition-colors"
                  >
                    <TableCell className="font-medium py-4">{item.product}</TableCell>
                    <TableCell className="text-muted-foreground py-4">{item.description}</TableCell>
                    <TableCell className="text-right font-bold text-primary py-4">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <p className="text-sm text-muted-foreground text-center mt-6">
            * Цены указаны за единицу товара
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
