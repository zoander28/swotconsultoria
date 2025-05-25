
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Target, Heart, Lightbulb, Shield, Leaf } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2008",
      title: "O Início da Jornada",
      description: "Zoander de Queiroz Silva, estudante de Administração de Empresas, planta a semente da SWOT Consultoria."
    },
    {
      year: "2016",
      title: "Visão Ganha Foco",
      description: "Durante o Seminário EMPRETEC da ONU, a meta para formalização da empresa é estabelecida."
    },
    {
      year: "2021",
      title: "Nascimento Oficial",
      description: "Em 11 de maio, a SWOT Consultoria é oficialmente formalizada, marcando um novo capítulo."
    },
    {
      year: "2024",
      title: "Expansão Consolidada",
      description: "Presença consolidada em mais de 52 cidades do Estado de Mato Grosso."
    }
  ];

  const values = [
    { icon: Lightbulb, title: "Inovação Constante", description: "Buscamos sempre novas soluções e metodologias" },
    { icon: Award, title: "Comprometimento com a Excelência", description: "Qualidade em tudo que fazemos" },
    { icon: Shield, title: "Integridade e Ética", description: "Transparência em todas as nossas relações" },
    { icon: Leaf, title: "Desenvolvimento Sustentável", description: "Crescimento responsável e consciente" },
    { icon: Users, title: "Colaboração e Parceria", description: "Trabalho em equipe e parcerias estratégicas" },
    { icon: Target, title: "Orientação para o Cliente", description: "Foco total na satisfação do cliente" },
    { icon: Heart, title: "Paixão pela Transformação", description: "Amor genuíno por transformar negócios" },
    { icon: Users, title: "Diversidade e Inclusão", description: "Respeito e valorização das diferenças" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-swot-blue to-swot-blue/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Uma história de dedicação, inovação e transformação empresarial
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  No ano de 2008, uma semente de inovação e visão estratégica foi plantada na mente 
                  do jovem estudante de Administração de Empresas, Zoander de Queiroz Silva.
                </p>
                <p>
                  Ao longo dos anos, a ideia inicial floresceu, crescendo e se refinando. O aprendizado 
                  se tornou um aliado inseparável, combinando uma busca incessante por informações com 
                  a expertise adquirida em diversas áreas e setores da economia brasileira.
                </p>
                <p>
                  A SWOT Consultoria, como um organismo vivo, começou a atuar em empresas de diferentes 
                  tamanhos, adaptando-se e prosperando em meio aos desafios empresariais.
                </p>
                <p>
                  Em novembro de 2016, durante participação no Seminário EMPRETEC da ONU, a visão ganhou 
                  foco. Ali, traçou-se a meta ambiciosa para a plena implantação e formalização da empresa.
                </p>
                <p>
                  Essa meta, inicialmente um sonho, se materializou no dia 11 de maio de 2021, marcando 
                  oficialmente o nascimento da SWOT Consultoria.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80" 
                alt="Paisagem representando crescimento" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Nossa Jornada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-swot-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                    <CardTitle className="text-swot-blue">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-swot-blue text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transformar o cenário empresarial, oferecendo soluções inovadoras e estratégicas 
                  que contribuam com o desenvolvimento sustentável de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-swot-blue text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser reconhecida como fonte de conhecimento e impacto positivo na transformação 
                  das micro e pequenas empresas em todo o Estado de Mato Grosso, expandindo nossa 
                  atuação para alcançar uma presença nacional até 31 de dezembro de 2030.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-swot-blue text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Inovação Constante</div>
                  <div>• Comprometimento</div>
                  <div>• Integridade e Ética</div>
                  <div>• Sustentabilidade</div>
                  <div>• Colaboração</div>
                  <div>• Aprendizado Contínuo</div>
                  <div>• Foco no Cliente</div>
                  <div>• Diversidade</div>
                  <div>• Responsabilidade</div>
                  <div>• Transformação</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Nossos Valores em Detalhes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-swot-turquoise/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <value.icon className="h-6 w-6 text-swot-turquoise" />
                    </div>
                    <CardTitle className="text-sm text-swot-blue">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-xs">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Líder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Líder
            </h2>
            <p className="text-xl text-gray-600">
              Conheça quem está à frente da SWOT Consultoria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80" 
                alt="Zoander de Queiroz Silva" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-swot-blue mb-4">Zoander de Queiroz Silva</h3>
              <p className="text-gray-600 mb-4 font-medium">
                Bacharel em Administração de Empresas | Consultor Empresarial | Facilitador EMPRETEC
              </p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sou Bacharel em Administração de Empresas e tenho orgulho de dizer que minha trajetória 
                  profissional tem sido marcada pelo propósito de contribuir com o desenvolvimento de 
                  pessoas, negócios e territórios.
                </p>
                <p>
                  Além de empresário à frente da SWOT Consultoria, sou facilitador do Empretec, um 
                  seminário desenvolvido pela ONU para desenvolvimento do comportamento empreendedor.
                </p>
                <p>
                  Destaco o período em que estive como Gerente Regional do Sebrae/MT, onde coordenei 
                  projetos de inovação, tecnologia e gestão em 16 municípios, atendendo mais de mil empresas.
                </p>
                <p>
                  Participei ativamente da implantação de programas como o "Nosso Leite", voltado para 
                  produtores rurais, e iniciativas de desburocratização e fortalecimento do empreendedorismo local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
