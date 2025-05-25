
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, TrendingUp, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Users,
      title: "Consultoria Empresarial",
      description: "Análise estratégica completa para otimizar processos e aumentar a eficiência do seu negócio."
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias personalizadas para atingir seus objetivos empresariais."
    },
    {
      icon: TrendingUp,
      title: "Gestão de Performance",
      description: "Implementação de indicadores e métricas para acompanhar o crescimento da sua empresa."
    },
    {
      icon: BookOpen,
      title: "Treinamentos",
      description: "Capacitação de equipes através de workshops e treinamentos especializados."
    }
  ];

  const stats = [
    { number: "52+", label: "Cidades Atendidas" },
    { number: "1000+", label: "Empresas Impactadas" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "100%", label: "Satisfação dos Clientes" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-swot-blue to-swot-blue/80 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transformando o 
                <span className="text-swot-turquoise"> Cenário Empresarial</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Oferecemos soluções inovadoras e estratégicas que contribuem com o desenvolvimento 
                sustentável de micro e pequenas empresas em todo o Estado de Mato Grosso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-swot-turquoise hover:bg-swot-turquoise/90 text-swot-blue font-semibold">
                  <Link to="/contato">Agende uma Consulta</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-swot-blue">
                  <Link to="/servicos">Conheça Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80" 
                alt="Equipe de consultoria trabalhando" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-swot-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de consultoria empresarial 
              para impulsionar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-swot-turquoise" />
                  </div>
                  <CardTitle className="text-swot-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-swot-blue hover:bg-swot-blue/90">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" 
                alt="Profissional trabalhando" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 mb-6">
                Desde 2008, desenvolvemos soluções inovadoras para empresas de diferentes tamanhos. 
                Em 2021, formalizamos a SWOT Consultoria com o objetivo de transformar o cenário 
                empresarial em Mato Grosso.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-swot-turquoise mr-3" />
                  <span className="text-gray-700">Mais de 15 anos de experiência</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-swot-turquoise mr-3" />
                  <span className="text-gray-700">Presença em 52+ cidades de MT</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-swot-turquoise mr-3" />
                  <span className="text-gray-700">Metodologia comprovada</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg" className="border-swot-blue text-swot-blue hover:bg-swot-blue hover:text-white">
                <Link to="/quem-somos">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-swot-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar novos patamares de sucesso.
          </p>
          <Button asChild size="lg" className="bg-swot-turquoise hover:bg-swot-turquoise/90 text-swot-blue font-semibold">
            <Link to="/contato">Agende uma Consulta Gratuita</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
