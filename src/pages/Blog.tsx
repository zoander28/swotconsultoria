
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Estratégias para Aumentar a Produtividade da Sua Equipe",
      excerpt: "Descubra metodologias comprovadas que podem transformar a performance da sua equipe e impulsionar os resultados da empresa.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80",
      category: "Gestão",
      author: "Zoander Silva",
      date: "15 de Janeiro, 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Como Implementar um Planejamento Estratégico Eficaz",
      excerpt: "Passo a passo para criar um planejamento estratégico que realmente funcione e gere resultados tangíveis para seu negócio.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
      category: "Estratégia",
      author: "Zoander Silva",
      date: "10 de Janeiro, 2024",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Análise SWOT: Ferramenta Fundamental para Seu Negócio",
      excerpt: "Entenda como usar a análise SWOT para identificar oportunidades e ameaças, fortalecendo a posição da sua empresa no mercado.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      category: "Ferramentas",
      author: "Zoander Silva",
      date: "5 de Janeiro, 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Gestão Financeira para Micro e Pequenas Empresas",
      excerpt: "Dicas práticas para manter a saúde financeira da sua empresa e tomar decisões mais assertivas baseadas em dados.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      category: "Finanças",
      author: "Zoander Silva",
      date: "28 de Dezembro, 2023",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Inovação em Tempos de Crise: Como Se Reinventar",
      excerpt: "Estratégias para transformar desafios em oportunidades e manter sua empresa competitiva em cenários adversos.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
      category: "Inovação",
      author: "Zoander Silva",
      date: "20 de Dezembro, 2023",
      readTime: "9 min"
    },
    {
      id: 6,
      title: "Cultura Organizacional: O Coração da Empresa",
      excerpt: "Como desenvolver uma cultura organizacional forte que engaje funcionários e impulsione o crescimento sustentável.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&q=80",
      category: "Recursos Humanos",
      author: "Zoander Silva",
      date: "15 de Dezembro, 2023",
      readTime: "6 min"
    }
  ];

  const categories = ["Todos", "Gestão", "Estratégia", "Ferramentas", "Finanças", "Inovação", "Recursos Humanos"];
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-swot-blue to-swot-blue/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Conhecimento especializado para impulsionar o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigo em Destaque</h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <span className="text-sm text-gray-500">{featuredPost.readTime} de leitura</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <Button className="bg-swot-blue hover:bg-swot-blue/90">
                    Ler Artigo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Todos os Artigos</h2>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "Todos" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-swot-blue hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-swot-blue group-hover:text-swot-turquoise transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-swot-blue hover:text-swot-turquoise">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-swot-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Receba Nossos Insights
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Cadastre-se para receber nossos artigos e dicas exclusivas 
            diretamente no seu e-mail.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-swot-turquoise hover:bg-swot-turquoise/90 text-swot-blue font-semibold px-6">
              Inscrever
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
