import { motion } from 'motion/react';
import {
  ArrowRight,
  Monitor,
  Layout,
  Palette,
  Share2,
  HeadphonesIcon,
  Zap,
  CheckCircle2,
  Star
} from 'lucide-react';

export default function App() {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20acelerar%20meus%20resultados%20com%20a%20Ferrari%20Digital!";

  return (
    <div className="min-h-screen bg-black-premium text-gray-200 overflow-x-hidden font-sans">
      
      {/* 0. NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black-premium/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ferrari-red flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(255,0,0,0.5)]">
              F
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white">
              FERRARI <span className="text-ferrari-red">DIGITAL</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#servicos" className="hover:text-ferrari-red transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-ferrari-red transition-colors">Diferenciais</a>
            <a href="#planos" className="hover:text-ferrari-red transition-colors">Planos</a>
            <a href="#portfolio" className="hover:text-ferrari-red transition-colors">Portfólio</a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-ferrari-red hover:bg-ferrari-red/10 transition-all font-medium text-sm hidden md:block"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ferrari-red/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-ferrari-red/5 to-transparent pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-ferrari-red/30 bg-ferrari-red/10 text-ferrari-red text-sm font-medium tracking-wide uppercase">
            Agência de Performance Premium
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
            Acelere sua presença digital com a <span className="text-ferrari-red text-glow">Ferrari Digital</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
            Sites, landing pages e branding criados para gerar autoridade e vendas. Domine o seu nicho com um posicionamento de alto valor.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planos"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-ferrari-red text-white font-semibold text-lg hover:bg-ferrari-dark transition-all box-glow flex items-center justify-center gap-2 group"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-lg transition-all flex items-center justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. PROVA SOCIAL */}
      <section className="py-16 border-y border-white/5 bg-black-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm mb-4">Empresas e criadores já estão acelerando seus resultados conosco</p>
            <div className="flex justify-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-ferrari-red text-ferrari-red drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
              ))}
            </div>
            <p className="text-white/80 font-medium">Nota máxima em satisfação</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Clientes Atendidos", value: "+150" },
              { label: "Projetos Entregues", value: "320" },
              { label: "Aumento em Conversão", value: "3x" },
              { label: "Taxa de Satisfação", value: "99%" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Serviços Premium</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Soluções completas e de alta performance para escalar o seu negócio e dominar o mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Monitor />, title: "Criação de Sites Profissionais", desc: "Plataformas robustas, rápidas e com design exclusivo para sua marca." },
              { icon: <Layout />, title: "Landing Pages de Alta Conversão", desc: "Páginas otimizadas para transformar visitantes em clientes qualificados." },
              { icon: <Palette />, title: "Branding e Identidade Visual", desc: "Construção de marcas memoráveis que transmitem autoridade e luxo." },
              { icon: <Share2 />, title: "Gestão para Redes Sociais", desc: "Posicionamento estratégico para influenciadores e marcas premium." },
              { icon: <HeadphonesIcon />, title: "Suporte Estratégico", desc: "Consultoria contínua para escalar suas vendas com funis eficientes." },
              { icon: <Zap />, title: "Soluções Rápidas", desc: "Entregas ágeis sem comprometer a qualidade e a estética premium." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black-card p-8 rounded-3xl border border-white/5 hover:border-ferrari-red/50 hover-glow transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-ferrari-red mb-6 group-hover:bg-ferrari-red group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 px-6 bg-black-card border-y border-white/5 relative overflow-hidden">
        {/* Subtle Background Red Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ferrari-red/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Por que escolher a Ferrari Digital?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Não entregamos apenas design. Entregamos uma máquina de vendas sofisticada. Nossa metodologia combina estética de alto nível com engenharia de conversão.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Atendimento Rápido", 
                "Design Premium", 
                "Estratégia focada em vendas",
                "Entrega Profissional",
                "Equipe Preparada",
                "Suporte Humanizado"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-ferrari-red" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 box-glow relative">
               <div className="absolute inset-0 bg-ferrari-red/20 mix-blend-overlay z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200" 
                 alt="Ferrari Digital Premium Workspace"
                 className="w-full h-full object-cover grayscale"
               />
             </div>
          </div>
        </div>
      </section>

      {/* 5. PACKS / PLANOS */}
      <section id="planos" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Investimento</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Soluções sob medida para o tamanho da sua ambição.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-black-card p-8 rounded-3xl border border-white/5 flex flex-col relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">Para quem quer começar com o pé direito.</p>
              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {['Landing Page Single', 'Design Responsivo', 'Copywriting Básico', 'SEO On-Page Bás.', 'Suporte por 15 dias'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-center font-semibold transition-all">
                Quero esse plano
              </a>
            </div>

            {/* Pro - Destaque */}
            <div className="bg-gradient-to-b from-black-card to-[#2a0505] p-8 rounded-3xl border border-ferrari-red/50 box-glow transform md:-translate-y-4 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-ferrari-red"></div>
              <div className="absolute top-5 right-5 bg-ferrari-red px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Popular</div>
              
              <h3 className="font-display text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-gray-400 text-sm mb-6">O motor ideal para escalar vendas e conversão.</p>
              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {['Site Institucional 5 pág.', 'Landing Page Alta Conv.', 'Design Premium Exclusivo', 'Copy Persuasiva Avançada', 'Integrações (Pixel, GA4)', 'Suporte por 30 dias'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white text-sm">
                      <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-ferrari-red hover:bg-ferrari-dark text-white text-center font-bold transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                Quero esse plano
              </a>
            </div>

            {/* Elite */}
            <div className="bg-black-card p-8 rounded-3xl border border-white/5 flex flex-col relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Elite</h3>
              <p className="text-gray-400 text-sm mb-6">A experiência completa e personalizada.</p>
              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {['Plataforma sob medida', 'Identidade Visual Completa', 'Gestão de Redes Sociais', 'Estratégia de Lançamento', 'SEO Avançado Completo', 'Suporte Prioritário'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-center font-semibold transition-all">
                Quero esse plano
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-400">
            <p>Ou solicite um <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-ferrari-red hover:underline font-medium">orçamento personalizado</a>.</p>
          </div>
        </div>
      </section>

      {/* 6. PORTFÓLIO */}
      <section id="portfolio" className="py-24 bg-black-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Nosso Acervo Premium</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Confira o nível de excelência que entregamos aos nossos parceiros.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", title: "Landing Page SaaS" },
              { img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", title: "Branding Luxo" },
              { img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800", title: "Site Institucional Arquitetura" },
              { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800", title: "E-Commerce Premium" }
            ].map((work, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-black border border-white/10">
                <div className="absolute inset-0 bg-ferrari-red/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={work.img} alt={work.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 z-20">
                  <h3 className="text-2xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Pronto para acelerar <br/> seus resultados?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-ferrari-red text-white font-bold text-xl hover:bg-ferrari-dark transition-all box-glow flex items-center justify-center gap-3"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="#planos"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-semibold text-xl transition-all flex items-center justify-center"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-ferrari-red flex items-center justify-center font-display font-bold text-white">F</div>
              <span className="font-display font-bold text-xl tracking-wide">FERRARI DIGITAL</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Potencializamos marcas com design de elite e estratégias de conversão de alto impacto.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-500 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="text-gray-500 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#planos" className="text-gray-500 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-white transition-colors">Portfólio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contato</h4>
            <ul className="space-y-3">
              <li><a href={whatsappLink} className="text-gray-500 hover:text-ferrari-red transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> WhatsApp</a></li>
              <li><a href="#" className="text-gray-500 hover:text-ferrari-red transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Instagram</a></li>
              <li><a href="mailto:contato@ferraridigital.com" className="text-gray-500 hover:text-ferrari-red transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Email</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>Ferrari Digital © {new Date().getFullYear()}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 group hover-glow"
        aria-label="Falar no WhatsApp"
      >
         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 21.688c-1.579-.001-3.093-.414-4.42-1.196l-.317-.189-3.284.86 1.157-2.616-.208-.332c-.854-1.353-1.306-2.91-1.302-4.507.01-4.708 3.843-8.528 8.558-8.53 2.279 0 4.417.887 6.027 2.496 1.61 1.608 2.498 3.746 2.498 6.023-.01 4.706-3.843 8.526-8.558 8.531zm-7.695-1.921l2.09-.548 1.48.88c1.32.784 2.825 1.198 4.381 1.199 4.318 0 7.85-3.526 7.85-7.848 0-4.321-3.535-7.849-7.859-7.851-4.32-.001-7.854 3.526-7.856 7.846-.002 1.554.41 3.058 1.19 4.375l.872 1.47-1.465 2.505-.592 1.256h.001l-.096.216z"/>
            <path d="M17.391 14.865c-.29-.144-1.708-.843-1.972-.94-.264-.095-.456-.144-.649.144-.192.29-.744.939-.912 1.131-.168.192-.336.216-.624.072-.288-.144-1.218-.45-2.322-1.436-.86-.768-1.44-1.716-1.608-2.004-.168-.288-.018-.444.126-.588.132-.132.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.136-.234-.564-.468-.486-.648-.492-.168-.006-.36-.006-.552-.006-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.028 3.096 4.908 4.338.685.297 1.22.474 1.637.607.689.222 1.316.19 1.808.115.552-.083 1.708-.696 1.948-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
          </svg>
      </motion.a>
    </div>
  );
}
