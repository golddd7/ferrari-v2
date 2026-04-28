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
  Star,
  Quote,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20acelerar%20minha%20empresa%20com%20a%20Ferrari%20Digital!";

  return (
    <div className="min-h-screen bg-black-premium text-gray-200 overflow-x-hidden font-sans selection:bg-ferrari-red selection:text-white">
      
      {/* 0. NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black-premium/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ferrari-red flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(255,26,26,0.5)]">
              F
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-white">
              FERRARI <span className="text-ferrari-red">DIGITAL</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#servicos" className="hover:text-ferrari-red transition-colors">Projetos</a>
            <a href="#diferenciais" className="hover:text-ferrari-red transition-colors">Diferenciais</a>
            <a href="#planos" className="hover:text-ferrari-red transition-colors">Planos</a>
            <a href="#depoimentos" className="hover:text-ferrari-red transition-colors">Depoimentos</a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-ferrari-red text-white hover:bg-ferrari-dark transition-all font-semibold text-sm hidden md:block shadow-[0_0_15px_rgba(255,26,26,0.3)] hover:shadow-[0_0_25px_rgba(255,26,26,0.6)]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-ferrari-red/15 blur-[150px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-block mb-6 px-5 py-2 rounded-full border border-ferrari-red/30 bg-ferrari-red/10 text-ferrari-red text-xs md:text-sm font-bold tracking-widest uppercase">
            Sua agência de performance premium
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8">
            Sua empresa merece <br className="hidden md:block"/>
            <span className="text-ferrari-red text-glow">vender no automático.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Criamos sites premium, landing pages e estruturas digitais feitas para atrair clientes e gerar vendas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a
              href="#planos"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-ferrari-red text-white font-bold text-lg hover:bg-ferrari-dark transition-all animate-pulse-glow flex items-center justify-center gap-3 group"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-semibold text-lg transition-all flex items-center justify-center"
            >
              Ver projetos
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
              <span>+50 projetos entregues</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
              <span>Atendimento rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
              <span>Suporte humanizado</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. POR QUE ESCOLHER */}
      <section id="diferenciais" className="py-24 px-6 bg-black-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ferrari-red/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Não entregamos apenas design. <br/>
              <span className="text-ferrari-red text-glow">Entregamos uma máquina de vendas sofisticada.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mt-12">
              {[
                "Atendimento rápido", 
                "Estratégia focada em vendas",
                "Equipe preparada",
                "Design premium",
                "Entrega profissional",
                "Suporte humanizado"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ferrari-red/10 border border-ferrari-red/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
                  </div>
                  <span className="text-gray-200 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full"
          >
             <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 box-glow relative group">
               <div className="absolute inset-0 bg-ferrari-red/20 mix-blend-overlay z-10 group-hover:bg-ferrari-red/10 transition-colors duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" 
                 alt="Equipe Premium Ferrari Digital"
                 className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black-premium via-transparent to-transparent z-10"></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVIÇOS / CARDS DE IMAGENS */}
      <section id="servicos" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-ferrari-red/30 bg-ferrari-red/10 text-ferrari-red text-xs font-bold tracking-widest uppercase">
              Nosso Acervo Premium
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Projetos de Alto Nível</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">O que entregamos para acelerar os resultados da sua empresa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Site Institucional Arquitetura", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" },
              { title: "E-commerce Premium", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" },
              { title: "Landing Page SaaS", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
              { title: "Branding Luxo", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" }
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[16/10] bg-black border border-white/5 hover:border-ferrari-red/50 hover-glow transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-ferrari-red/10 mix-blend-overlay z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={work.img} alt={work.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-premium/90 via-black-premium/30 to-transparent flex flex-col justify-end p-8 md:p-10 z-20">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{work.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     <span className="inline-flex items-center gap-2 text-ferrari-red font-semibold">
                       Ver projeto <ArrowRight className="w-4 h-4" />
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLANOS (COM PREÇOS) */}
      <section id="planos" className="py-24 md:py-32 px-6 bg-black-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,26,26,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Investimento</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Selecione o plano ideal para acelerar as vendas do seu negócio.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Starter */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black-premium p-10 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden hover:border-white/30 transition-colors"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-1">STARTER</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-gray-400 font-medium">R$</span>
                <span className="text-4xl font-display font-bold text-white">497</span>
              </div>
              
              <div className="mb-10 flex-grow">
                <ul className="space-y-5">
                  {['Landing page simples', 'WhatsApp integrado', 'Design premium', 'Entrega rápida'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-300 text-base">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-center font-bold text-lg transition-all">
                Começar Agora
              </a>
            </motion.div>

            {/* Pro - Destaque */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-b from-black-card to-[#2a0505] p-10 rounded-3xl border border-ferrari-red box-glow transform lg:-translate-y-6 flex flex-col relative overflow-hidden z-10"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-ferrari-red"></div>
              <div className="absolute top-6 right-6 bg-ferrari-red px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white animate-pulse">Mais Escolhido</div>
              
              <h3 className="font-display text-2xl font-bold text-ferrari-red mb-1">PRO</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-gray-400 font-medium">R$</span>
                <span className="text-5xl font-display font-bold text-white">997</span>
              </div>
              
              <div className="mb-10 flex-grow">
                <ul className="space-y-5">
                  {['Landing page completa', 'Copy estratégica', 'Alta conversão', 'SEO básico', 'WhatsApp integrado'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 text-ferrari-red shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-5 rounded-xl bg-ferrari-red hover:bg-ferrari-dark text-white text-center font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,26,26,0.4)] hover:shadow-[0_0_30px_rgba(255,26,26,0.6)]">
                Quero vender mais
              </a>
            </motion.div>

            {/* Elite */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black-premium p-10 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden hover:border-white/30 transition-colors"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-1">ELITE</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-gray-400 font-medium">R$</span>
                <span className="text-4xl font-display font-bold text-white">1.997</span>
              </div>
              
              <div className="mb-10 flex-grow">
                <ul className="space-y-5">
                  {['Site premium completo', 'Branding incluso', 'Estratégia personalizada', 'Performance máxima', 'Suporte VIP'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-300 text-base">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-center font-bold text-lg transition-all">
                Quero nível elite
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Depois do site novo comecei receber leads toda semana. A estrutura foca mesmo em conversão.", author: "João, Empresário" },
              { text: "Visual absurdo e atendimento rápido. A entrega foi impecável do início ao fim.", author: "Lucas, Loja Online" },
              { text: "Profissionalismo do início ao fim. Minha marca agora transmite o luxo que os meus serviços oferecem.", author: "Mariana, Estética" }
            ].map((dep, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black-card border border-white/5 p-10 rounded-3xl hover:border-ferrari-red/30 transition-colors relative"
              >
                <Quote className="w-10 h-10 text-ferrari-red/20 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-ferrari-red text-ferrari-red" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{dep.text}"</p>
                <span className="font-display font-bold text-white">— {dep.author}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GARANTIA */}
      <section className="py-24 px-6 bg-black-card border-y border-white/5 relative">
         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,26,26,0.03),transparent)]"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-ferrari-red/10 border border-ferrari-red/30 flex items-center justify-center mb-8 box-glow">
              <ShieldCheck className="w-10 h-10 text-ferrari-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Compromisso com resultado.</h2>
            <p className="text-xl text-gray-400 mb-0">Projeto feito com estratégia, visual premium e suporte total durante a entrega.</p>
         </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black-premium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] mix-blend-overlay opacity-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Pronto para acelerar <br/> <span className="text-ferrari-red text-glow">sua empresa?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16">
            Solicite agora seu projeto e fale direto no WhatsApp.
          </p>
          <div className="flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 md:px-16 md:py-8 rounded-full bg-ferrari-red text-white font-black text-xl md:text-3xl hover:bg-ferrari-dark transition-all animate-pulse-glow flex items-center justify-center gap-4 tracking-wide shadow-[0_0_30px_rgba(255,26,26,0.5)] border border-ferrari-red/50"
            >
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-black pt-16 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ferrari-red flex items-center justify-center font-display font-bold text-white text-xl">F</div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white">FERRARI DIGITAL</span>
              <span className="text-gray-500 text-sm">© {new Date().getFullYear()}. Todos os direitos reservados.</span>
            </div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="font-medium text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href={whatsappLink} className="font-medium text-gray-400 hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:contato@ferraridigital.com" className="font-medium text-gray-400 hover:text-white transition-colors">Email</a>
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
