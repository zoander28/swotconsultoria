
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, Target, TrendingUp, BookOpen, BarChart3, FileText, 
  Lightbulb, PiggyBank, Calendar, CheckCircle, ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Consultoria Empresarial",
      description: "Análise estratégica completa para otimizar processos e aumentar a eficiência do seu negócio.",
      features: ["Análise SWOT", "Diagnóstico empresarial", "Otimização de processos", "Gestão de mudanças"],
      duration: "3-6 meses",
      category: "Estratégia"
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias personalizadas para atingir seus objetivos empresariais.",
      features: ["Definição de missão e visão", "Análise de mercado", "Plano de ação", "KPIs estratégicos"],
      duration: "2-4 meses",
      category: "Planejamento"
    },
    {
      icon: TrendingUp,
      title: "Gestão de Performance",
      description: "Implementação de indicadores e métricas para acompanhar o crescimento da sua empresa.",
      features: ["Dashboard de indicadores", "Métricas personalizadas", "Relatórios gerenciais", "Acompanhamento mensal"],
      duration: "Contínuo",
      category: "Monitoramento"
    },
    {
      icon: BookOpen,
      title: "Treinamentos Empresariais",
      description: "Capacitação de equipes através de workshops e treinamentos especializados.",
      features: ["Liderança", "Vendas", "Atendimento ao cliente", "Gestão financeira"],
      duration: "1-3 dias",
      category: "Capacitação"
    },
    {
      icon: BarChart3,
      title: "Análise Financeira",
      description: "Avaliação completa da saúde financeira e propostas de melhorias.",
      features: ["Análise de DRE", "Fluxo de caixa", "Controle de custos", "Precificação"],
      duration: "1-2 meses",
      category: "Financeiro"
    },
    {
      icon: FileText,
      title: "Plano de Negócios",
      description: "Elaboração de planos de negócios estruturados para novos empreendimentos.",
      features: ["Estudo de viabilidade", "Projeções financeiras", "Análise de mercado", "Estratégias de marketing"],
      duration: "1-3 meses",
      category: "Planejamento"
    },
    {
      icon: Lightbulb,
      title: "Inovação e Tecnologia",
      description: "Implementação de soluções tecnológicas para modernizar seu negócio.",
      features: ["Transformação digital", "Automação de processos", "Ferramentas de gestão", "E-commerce"],
      duration: "3-8 meses",
      category: "Tecnologia"
    },
    {
      icon: PiggyBank,
      title: "Captação de Recursos",
      description: "Auxílio na busca por investimentos e linhas de crédito para seu negócio.",
      features: ["Preparação de pitch", "Busca por investidores", "Linhas de crédito", "Fomento público"],
      duration: "2-6 meses",
      category: "Financeiro"
    }
  ];

  const categories = ["Todos", "Estratégia", "Planejamento", "Monitoramento", "Capacitação", "Financeiro", "Tecnologia"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-swot-blue to-swot-blue/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Soluções completas para transformar e impulsionar o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Podemos Ajudar Sua Empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços especializados para atender 
              às necessidades específicas do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center group-hover:bg-swot-turquoise/20 transition-colors">
                      <service.icon className="h-6 w-6 text-swot-turquoise" />
                    </div>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-swot-blue group-hover:text-swot-turquoise transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Inclui:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-swot-turquoise mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {service.duration}
                        </span>
                        <Button asChild size="sm" className="bg-swot-blue hover:bg-swot-blue/90">
                          <Link to="/contato">
                            Solicitar
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia comprovada garante resultados efetivos para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", description: "Análise completa da situação atual da empresa" },
              { step: "02", title: "Planejamento", description: "Desenvolvimento de estratégias personalizadas" },
              { step: "03", title: "Implementação", description: "Execução das soluções com acompanhamento" },
              { step: "04", title: "Monitoramento", description: "Avaliação contínua dos resultados obtidos" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-swot-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-swot-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra qual serviço é o ideal 
            para as necessidades da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-swot-turquoise hover:bg-swot-turquoise/90 text-swot-blue font-semibold">
              <Link to="/contato">Agende uma Consulta</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-swot-blue">
              <Link to="/quem-somos">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
