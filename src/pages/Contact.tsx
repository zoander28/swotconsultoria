
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Consultoria Empresarial",
    "Planejamento Estratégico", 
    "Gestão de Performance",
    "Treinamentos Empresariais",
    "Análise Financeira",
    "Plano de Negócios",
    "Inovação e Tecnologia",
    "Captação de Recursos"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-swot-blue to-swot-blue/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Vamos conversar sobre como podemos transformar o seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Agende uma Consulta
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato para 
                agendar uma consulta gratuita e discutir suas necessidades.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-swot-blue hover:bg-swot-blue/90">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-8">
                  Estamos prontos para atender você! Entre em contato através 
                  dos nossos canais de comunicação.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-swot-turquoise" />
                      </div>
                      <div>
                        <CardTitle className="text-swot-blue">Telefone/WhatsApp</CardTitle>
                        <CardDescription>(66) 99999-9999</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-swot-turquoise" />
                      </div>
                      <div>
                        <CardTitle className="text-swot-blue">E-mail</CardTitle>
                        <CardDescription>contato@swotconsultoria.com.br</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-swot-turquoise" />
                      </div>
                      <div>
                        <CardTitle className="text-swot-blue">Localização</CardTitle>
                        <CardDescription>Barra do Garças - MT, Brasil</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-swot-turquoise" />
                      </div>
                      <div>
                        <CardTitle className="text-swot-blue">Horário de Atendimento</CardTitle>
                        <CardDescription>
                          Segunda a Sexta: 08:00 - 18:00<br />
                          Sábado: 08:00 - 12:00
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card className="bg-swot-blue text-white">
                <CardHeader>
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 mr-3" />
                    <CardTitle>Consulta Gratuita</CardTitle>
                  </div>
                  <CardDescription className="text-gray-200">
                    Oferecemos uma primeira consulta gratuita de 30 minutos 
                    para entender suas necessidades e como podemos ajudar.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
            <p className="text-gray-600">Atendemos presencialmente em Barra do Garças e região, 
            e remotamente em todo o Estado de Mato Grosso</p>
          </div>
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Mapa - Barra do Garças, MT</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
