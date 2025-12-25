import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа").max(100, "Имя слишком длинное"),
  company: z.string().trim().max(200, "Название компании слишком длинное").optional(),
  phone: z.string().trim().min(10, "Введите корректный номер телефона").max(20, "Номер телефона слишком длинный"),
  email: z.string().trim().email("Введите корректный email").max(255, "Email слишком длинный"),
  message: z.string().trim().max(1000, "Сообщение слишком длинное").optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            name="name"
            placeholder="Ваше имя *"
            value={formData.name}
            onChange={handleChange}
            className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${errors.name ? "border-red-400" : ""}`}
          />
          {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Input
            name="company"
            placeholder="Название компании"
            value={formData.company}
            onChange={handleChange}
            className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${errors.company ? "border-red-400" : ""}`}
          />
          {errors.company && <p className="text-red-300 text-sm">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            name="phone"
            type="tel"
            placeholder="Телефон *"
            value={formData.phone}
            onChange={handleChange}
            className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${errors.phone ? "border-red-400" : ""}`}
          />
          {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Input
            name="email"
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent ${errors.email ? "border-red-400" : ""}`}
          />
          {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Комментарий к заявке (необязательно)"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent resize-none ${errors.message ? "border-red-400" : ""}`}
        />
        {errors.message && <p className="text-red-300 text-sm">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Отправить заявку
          </>
        )}
      </Button>

      <p className="text-xs text-primary-foreground/60 text-center">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
};

export default RequestForm;
