const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/70 text-sm">
            © {currentYear} ООО ВИКТОРИЯ. Все права защищены.
          </div>
          <div className="text-primary-foreground/70 text-sm">
            Чулочно-носочная продукция оптом
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
