const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            О категории
          </h2>
          
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-card">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-4 md:mb-6">
              Чулочно-носочная продукция — одна из самых стабильных категорий в рознице и онлайн-продажах. 
              Ассортимент закрывает основные потребности конечного покупателя и обеспечивает регулярные повторные заказы.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Представленные позиции соответствуют текущему рыночному уровню Wildberries и подходят для 
              масштабирования бизнеса без дополнительных маркетинговых затрат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
