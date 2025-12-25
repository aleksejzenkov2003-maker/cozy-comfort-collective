import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Check, Mail, Phone, Building2, MessageSquare, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Request {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  email: string;
  message: string | null;
  created_at: string;
  is_read: boolean;
}

const Admin = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Ошибка загрузки",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from("requests")
      .update({ is_read: true })
      .eq("id", id);

    if (error) {
      toast({
        title: "Ошибка",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, is_read: true } : req))
      );
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const unreadCount = requests.filter((r) => !r.is_read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  На сайт
                </Button>
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                  Заявки
                </h1>
                <p className="text-sm text-muted-foreground">
                  {requests.length} всего · {unreadCount} новых
                </p>
              </div>
            </div>
            <Button onClick={fetchRequests} variant="outline" disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Обновить
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : requests.length === 0 ? (
          <div className="text-center py-20">
            <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Заявок пока нет
            </h2>
            <p className="text-muted-foreground">
              Новые заявки появятся здесь
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className={`bg-card rounded-xl p-4 sm:p-6 shadow-card border transition-all ${
                  request.is_read
                    ? "border-border opacity-70"
                    : "border-primary/30 ring-2 ring-primary/10"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="font-bold text-foreground text-lg">
                        {request.name}
                      </h3>
                      {!request.is_read && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Новая
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {format(new Date(request.created_at), "d MMMM yyyy, HH:mm", {
                          locale: ru,
                        })}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      <a
                        href={`tel:${request.phone}`}
                        className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        {request.phone}
                      </a>
                      <a
                        href={`mailto:${request.email}`}
                        className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        {request.email}
                      </a>
                      {request.company && (
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          {request.company}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    {request.message && (
                      <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">
                        {request.message}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  {!request.is_read && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markAsRead(request.id)}
                      className="shrink-0"
                    >
                      <Check className="w-4 h-4 mr-1.5" />
                      Прочитано
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
