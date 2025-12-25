const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 sm:py-8 bg-foreground">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-primary-foreground/70 text-xs sm:text-sm">
            © {currentYear} ООО ВИКТОРИЯ. Все права защищены.
          </div>
          <div className="text-primary-foreground/70 text-xs sm:text-sm">
            Чулочно-носочная продукция оптом
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
