"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, HardHat, Home as HomeIcon, Wrench, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: HomeIcon,
    title: "Construção Residencial",
    description: "Construção de casas e residências com qualidade e segurança do início ao fim do projeto.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Building2,
    title: "Construção Comercial",
    description: "Projetos comerciais completos, incluindo lojas, escritórios e estabelecimentos empresariais.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: HardHat,
    title: "Reformas e Ampliações",
    description: "Reformas completas ou parciais, ampliações e modernização de imóveis.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    description: "Manutenção preventiva e corretiva para manter seu imóvel sempre em perfeito estado.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Building2,
    title: "Acabamentos",
    description: "Serviços especializados em pintura, gesso, revestimentos e acabamentos de qualidade.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: HomeIcon,
    title: "Projetos Personalizados",
    description: "Desenvolvimento de projetos sob medida de acordo com suas necessidades e orçamento.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  }
];

const benefits = [
  "Equipe qualificada e experiente",
  "Materiais de primeira qualidade",
  "Cumprimento de prazos",
  "Orçamento transparente",
  "Acompanhamento total da obra",
  "Garantia dos serviços"
];

export default function Home() {
  const whatsappNumber = "5521975025882"; // Paulo Braga
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para construção civil.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Paulo Braga</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">Projetos</a>
            <a href="#diferenciais" className="text-sm font-medium hover:text-primary transition-colors">Diferenciais</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Orçamento
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transforme seus{" "}
              <span className="text-primary">sonhos em realidade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empresa especializada em construção civil com experiência e qualidade em todos os tipos de serviços. Do planejamento à entrega final.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar Orçamento Grátis
                </Button>
              </a>
              <a href="#servicos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Casa bonita com família feliz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="container mx-auto px-4 py-20 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de construção civil para atender todas as suas necessidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 h-12 w-12 rounded-lg bg-white/90 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Fale Conosco pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="projetos" className="container mx-auto px-4 py-20 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com qualidade e dedicação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
              alt="Construção em andamento"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Obra em Execução
              </p>
            </div>
          </div>
          
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
              alt="Estrutura de construção"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Estrutura
              </p>
            </div>
          </div>
          
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
              alt="Projeto arquitetônico"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Planejamento
              </p>
            </div>
          </div>
          
          <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
              alt="Casa moderna finalizada"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Projeto Finalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="diferenciais" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground">
              Por que escolher nossa empresa para sua obra?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você e tirar todas as suas dúvidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                  <CardDescription className="text-base">
                    Atendimento rápido e direto
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Telefone</CardTitle>
                <CardDescription className="text-base">
                  (21) 97502-5882
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">E-mail</CardTitle>
                <CardDescription className="text-base">
                  contato@construcao.com
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <CardTitle className="text-lg">Localização</CardTitle>
                    <CardDescription>
                      Atendemos toda a região metropolitana
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary to-orange-600 border-0 text-white">
          <CardHeader className="text-center py-12">
            <CardTitle className="text-3xl md:text-4xl mb-4 text-white">
              Pronto para começar seu projeto?
            </CardTitle>
            <CardDescription className="text-lg text-white/90 mb-6">
              Solicite seu orçamento gratuito agora mesmo e transforme seus planos em realidade
            </CardDescription>
            <div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar Orçamento Grátis
                </Button>
              </a>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2024 Paulo Braga Construções - Todos os direitos reservados</p>
            <p>Qualidade e compromisso em cada obra</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button 
          size="lg" 
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow bg-green-500 hover:bg-green-600"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
}

