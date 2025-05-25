
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5566999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os serviços da SWOT Consultoria.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
