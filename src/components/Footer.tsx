
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-swot-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/0f87eb7c-2c94-4924-aeca-bb9dfdaec85a.png" 
              alt="SWOT Consultoria" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-200 mb-4">
              Transformando o cenário empresarial com soluções inovadoras e estratégicas 
              para o desenvolvimento sustentável de micro e pequenas empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-200 hover:text-swot-turquoise transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-swot-turquoise" />
                <span className="text-gray-200">(66) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-swot-turquoise" />
                <span className="text-gray-200">contato@swotconsultoria.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-swot-turquoise mt-1" />
                <span className="text-gray-200">
                  Barra do Garças - MT<br />
                  Mato Grosso, Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-swot-blue/20 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © {new Date().getFullYear()} SWOT Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
