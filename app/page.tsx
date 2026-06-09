"use client"
import { useEffect, useRef } from "react"
import { useForm, ValidationError } from '@formspree/react'

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [state, handleSubmit] = useForm("meewkagd")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', system-ui, sans-serif; }
        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .glow { box-shadow: 0 0 40px rgba(232,69,60,0.3); }
        .glow:hover { box-shadow: 0 0 60px rgba(232,69,60,0.5); }
        .card-glow:hover { box-shadow: 0 8px 40px rgba(232,69,60,0.15); }
        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,69,60,0.15), transparent);
          pointer-events: none;
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .float { animation: float 5s ease-in-out infinite; }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .pulse-ring::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 9999px;
          border: 2px solid rgba(232,69,60,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }
        .text-gradient {
          background: linear-gradient(135deg, #fff 0%, #E8453C 60%, #ff6b5b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .border-glow { border: 1px solid rgba(232,69,60,0.2); }
        .border-glow:hover { border-color: rgba(232,69,60,0.6); }
        .stat-card { background: linear-gradient(135deg, #1a1a1a, #111); }
        nav { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      `}</style>

      <main className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">

        {/* NAV */}
        <nav className="fixed top-0 w-full bg-[#0A0A0A]/80 border-b border-white/5 z-50 px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E8453C] rounded-lg flex items-center justify-center text-white font-black text-sm">J</div>
            <span className="text-base font-bold tracking-tight">Jiroz <span className="text-[#E8453C]">Smart Booking</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            <a href="/contacto" className="hover:text-white transition-colors text-[#E8453C] font-semibold">Solicitar proyecto</a>
          </div>
          <a href="https://wa.me/18298414753" target="_blank" rel="noreferrer"
            className="bg-[#E8453C] hover:bg-[#c73a33] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 glow">
            Agenda reunión →
          </a>
        </nav>

        {/* HERO */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 grid-bg noise overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] pointer-events-none z-10" />

          <div className="relative z-20 max-w-4xl mx-auto">
            <div className="fade-up inline-flex items-center gap-2 bg-[#E8453C]/10 border border-[#E8453C]/25 text-[#E8453C] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#E8453C] rounded-full animate-pulse" />
              Disponible para nuevos proyectos
            </div>

            <h1 className="fade-up delay-1 text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tighter">
              Software que<br />
              <span className="text-gradient">transforma</span><br />
              tu negocio
            </h1>

            <p className="fade-up delay-2 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Construyo sistemas inteligentes, páginas web y apps a medida.
              Entrega rápida, precio justo, soporte incluido.
            </p>

            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/18298414753" target="_blank" rel="noreferrer"
                className="relative bg-[#E8453C] hover:bg-[#d13d35] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 glow pulse-ring">
                💬 Agenda una reunión gratis
              </a>
              <a href="#proyectos"
                className="border border-white/15 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200">
                Ver proyectos ↓
              </a>
            </div>

            {/* STATS ROW */}
            <div className="fade-up delay-4 mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { num: "100%", label: "Proyectos entregados" },
                { num: "24/7", label: "Sistemas activos" },
                { num: "RD", label: "República Dominicana" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-[#E8453C]">{s.num}</div>
                  <div className="text-neutral-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-up">
            <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">Servicios</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4 tracking-tight">¿Qué puedo hacer por ti?</h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">Soluciones digitales diseñadas para negocios que quieren crecer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "🗓️", tag: "Más popular", title: "Sistemas de Citas Online", desc: "Automatiza tu agenda con reservas 24/7. Tus pacientes o clientes agendan solos y reciben confirmación automática por WhatsApp. Sin llamadas, sin complicaciones." },
              { icon: "🌐", tag: null, title: "Páginas Web para Negocios", desc: "Tu negocio merece una presencia digital profesional. Diseño moderno, rápido y adaptado a tu marca para que tus clientes te encuentren y confíen." },
              { icon: "📱", tag: null, title: "Apps a Medida", desc: "¿Tienes un problema específico? Lo convertimos en una app que lo resuelve. Desarrollo mobile y web adaptado 100% a tus necesidades." },
              { icon: "⚙️", tag: null, title: "Software Personalizado", desc: "Sistemas completos de gestión para tu negocio. Base de datos, panel de administración, reportes y todo lo que necesites para operar con eficiencia." },
            ].map((s, i) => (
              <div key={s.title}
                className={`fade-up delay-${i + 1} relative bg-[#111] border-glow rounded-2xl p-8 card-glow transition-all duration-300 group overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8453C]/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-[#E8453C]/10 transition-all duration-500" />
                {s.tag && (
                  <span className="inline-block bg-[#E8453C]/10 text-[#E8453C] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    {s.tag}
                  </span>
                )}
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#E8453C] transition-colors duration-200">{s.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CASO DE EXITO */}
        <section id="proyectos" className="px-6 md:px-12 py-28 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 fade-up">
              <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">Proyectos</span>
              <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4 tracking-tight">Resultados reales</h2>
              <p className="text-neutral-500 text-lg">Lo que construyo funciona en producción, no solo en demos</p>
            </div>

            <div className="fade-up bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#E8453C]/15 rounded-3xl overflow-hidden">
              <div className="bg-[#E8453C]/5 border-b border-[#E8453C]/10 px-8 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E8453C]/40" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="text-neutral-500 text-xs font-mono">dental-loida-frontend.vercel.app</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">En producción</span>
                </div>
              </div>

              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/5 text-neutral-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                    🦷 Sector Salud — Odontología
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                    Consultorio Dental<br />Dra. Loida Díaz Lima
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    Transformamos un consultorio que dependía de llamadas telefónicas en un sistema completamente automatizado. De 0 a reservas 24/7 en menos de 2 semanas.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {[
                      "Reservas online disponibles las 24 horas",
                      "Confirmación automática por WhatsApp",
                      "Sincronización con Google Calendar",
                      "Cancelación de citas con un clic",
                      "Panel de administración completo",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                        <span className="w-5 h-5 bg-[#E8453C]/20 text-[#E8453C] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="https://dental-loida-frontend.vercel.app" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#E8453C]/50 text-[#E8453C] hover:bg-[#E8453C] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm">
                    Ver proyecto en vivo →
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "24/7", label: "Disponibilidad", sub: "Siempre activo" },
                    { num: "0", label: "Llamadas manuales", sub: "Todo automatizado" },
                    { num: "2", label: "Semanas", sub: "Tiempo de entrega" },
                    { num: "100%", label: "Automatizado", sub: "Sin intervención" },
                  ].map((s) => (
                    <div key={s.label} className="stat-card border border-white/5 rounded-2xl p-5 text-center">
                      <div className="text-2xl md:text-3xl font-black text-[#E8453C] mb-1">{s.num}</div>
                      <div className="text-white text-xs font-semibold mb-0.5">{s.label}</div>
                      <div className="text-neutral-600 text-xs">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GITHUB PORTFOLIO */}
        <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-up">
            <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">GitHub</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4 tracking-tight">Portafolio de proyectos</h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">Código real, proyectos reales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Dental Booking System",
                desc: "Sistema completo de citas para consultorio dental. Reservas 24/7, confirmación por WhatsApp y sincronización con Google Calendar.",
                tags: ["Next.js", "FastAPI", "Python", "Supabase"],
                url: "https://github.com/Jiroz07/dental-loida-frontend",
                live: "https://dental-loida-frontend.vercel.app",
                badge: "En producción",
              },
              {
                title: "Hospital Consultation API",
                desc: "Aplicación web para gestión de consultas hospitalarias, citas médicas y datos de pacientes.",
                tags: ["ASP.NET", "MVC", "C#", "JavaScript"],
                url: "https://github.com/Jiroz07/hospital-consultation-api",
                live: null,
                badge: null,
              },
              {
                title: "Mobile App (Xamarin)",
                desc: "Aplicación móvil multiplataforma para Android e iOS. Diseño nativo y experiencia fluida en ambas plataformas.",
                tags: ["Xamarin", "C#", "Android", "iOS"],
                url: "https://github.com/Jiroz07/rur-mobile-app",
                live: null,
                badge: null,
              },
            ].map((p, i) => (
              <div key={p.title}
                className={`fade-up delay-${(i % 4) + 1} relative bg-[#111] border-glow rounded-2xl p-6 card-glow transition-all duration-300 group flex flex-col`}>
                {p.badge && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold">{p.badge}</span>
                  </div>
                )}
                <h3 className="text-base font-bold mb-2 group-hover:text-[#E8453C] transition-colors">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="bg-white/5 text-neutral-400 text-xs px-2.5 py-1 rounded-full border border-white/5">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <a href={p.url} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs font-semibold transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Ver código
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-[#E8453C] hover:text-white text-xs font-semibold transition-colors">
                      <span>↗</span> Ver en vivo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-up">
            <a href="https://github.com/Jiroz07" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-neutral-400 hover:text-white font-semibold px-8 py-3 rounded-full text-sm transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Ver todos los proyectos en GitHub
            </a>
          </div>
        </section>

        {/* POR QUE JIROZ */}
        <section className="px-6 md:px-12 py-28 max-w-5xl mx-auto">
          <div className="text-center mb-20 fade-up">
            <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">Por qué elegirme</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Simple. Rápido. Justo.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Entrega Rápida", desc: "Sistemas funcionando en días, no meses. Sin procesos innecesarios ni reuniones eternas.", color: "from-yellow-500/10 to-transparent" },
              { icon: "💰", title: "Precio Justo", desc: "Sin costos ocultos ni sorpresas. Propuesta clara con todo incluido desde el primer día.", color: "from-green-500/10 to-transparent" },
              { icon: "🛠️", title: "Soporte Real", desc: "No desaparezco después de entregar. Estoy disponible cuando algo falla o cuando necesitas crecer.", color: "from-blue-500/10 to-transparent" },
            ].map((item, i) => (
              <div key={item.title} className={`fade-up delay-${i + 1} relative bg-[#111] border-glow rounded-2xl p-8 card-glow transition-all duration-300 overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMULARIO + CTA */}
        <section id="contacto" className="px-6 md:px-12 py-28 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-[#E8453C]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-up">
              <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">Empieza hoy</span>
              <h2 className="text-4xl md:text-6xl font-black mt-3 mb-4 leading-tight tracking-tighter">
                ¿Tienes una idea?<br />
                <span className="text-gradient">Hagámosla realidad.</span>
              </h2>
              <p className="text-neutral-500 text-lg max-w-xl mx-auto">
                Completa el formulario y me pondré en contacto contigo en menos de 24 horas.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">

              {/* LEFT — INFO */}
              <div className="md:col-span-2 space-y-6 fade-up">
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4">¿Por qué trabajar conmigo?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: "⚡", title: "Respuesta rápida", desc: "Te contacto en menos de 24 horas" },
                      { icon: "💰", title: "Sin sorpresas", desc: "Precio claro desde el inicio" },
                      { icon: "🛠️", title: "Soporte incluido", desc: "No desaparezco después de entregar" },
                      { icon: "🌴", title: "Local en RD", desc: "Entiendo tu mercado y tu cliente" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-white text-sm font-semibold">{item.title}</div>
                          <div className="text-neutral-500 text-xs">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111] border border-[#E8453C]/20 rounded-2xl p-6">
                  <div className="text-xs text-neutral-500 mb-3 uppercase tracking-widest font-bold">Caso reciente</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🦷</span>
                    <span className="text-white text-sm font-bold">Consultorio Dental</span>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-3">Sistema de citas completo con WhatsApp automático. Entregado en 2 semanas.</p>
                  <div className="flex gap-2">
                    <span className="bg-[#E8453C]/10 text-[#E8453C] text-xs px-2 py-1 rounded-full">En producción</span>
                    <span className="bg-white/5 text-neutral-400 text-xs px-2 py-1 rounded-full">Next.js</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-neutral-600 text-xs mb-3">¿Prefieres escribir directo?</p>
                  <a href="https://wa.me/18298414753" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 font-semibold px-5 py-3 rounded-full text-sm transition-all duration-200">
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* RIGHT — FORM */}
              <div className="md:col-span-3 fade-up delay-2">
                {state.succeeded ? (
                  <div className="bg-[#111] border border-[#E8453C]/20 rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-[#E8453C]/10 border-2 border-[#E8453C] rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
                    <h3 className="text-2xl font-black text-white mb-2">¡Solicitud recibida!</h3>
                    <p className="text-neutral-400">Te contactaré en menos de 24 horas. 🙌</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-[#111] border border-white/5 rounded-2xl p-8 space-y-5">

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">Nombre *</label>
                        <input type="text" name="nombre" required placeholder="Tu nombre"
                          className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-700" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">Negocio *</label>
                        <input type="text" name="negocio" required placeholder="Nombre del negocio"
                          className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-700" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">WhatsApp *</label>
                        <input type="tel" name="whatsapp" required placeholder="829-000-0000"
                          className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-700" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">Tipo de negocio *</label>
                        <input type="text" name="tipo_negocio" required placeholder="Ej: Clínica, Salón..."
                          className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-700" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wide">¿Qué necesitas? *</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Sistema de citas", "Página web", "Software personalizado"].map((op) => (
                          <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-3 py-3 cursor-pointer transition-colors group">
                            <input type="checkbox" name="servicio" value={op} className="accent-[#E8453C] w-3.5 h-3.5" />
                            <span className="text-neutral-400 text-xs group-hover:text-white transition-colors">{op}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wide">Presupuesto aproximado *</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Menos de RD$15,000", "RD$15,000 – RD$30,000", "RD$30,000 – RD$60,000", "Más de RD$60,000"].map((op) => (
                          <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-3 py-2.5 cursor-pointer transition-colors">
                            <input type="radio" name="presupuesto" value={op} required className="accent-[#E8453C] flex-shrink-0" />
                            <span className="text-neutral-400 text-xs">{op}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">¿Qué quieres lograr? *</label>
                      <textarea name="descripcion" required rows={3}
                        placeholder="Ej: Quiero que mis clientes agenden citas sin llamarme, que reciban confirmación por WhatsApp..."
                        className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-700 resize-none" />
                      <ValidationError field="descripcion" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>

                    <button type="submit" disabled={state.submitting}
                      className="w-full bg-[#E8453C] hover:bg-[#c73a33] disabled:opacity-50 text-white font-black py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#E8453C]/20 glow">
                      {state.submitting ? "Enviando..." : "Solicitar proyecto →"}
                    </button>

                    <p className="text-center text-neutral-600 text-xs">
                      Sin compromiso · Respondo en menos de 24 horas
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[#E8453C] rounded-md flex items-center justify-center text-white font-black text-xs">J</div>
            <span className="text-white font-bold text-sm">Jiroz Smart Booking</span>
          </div>
          <p className="text-neutral-600 text-xs">© 2026 — Desarrollo de Software a Medida · República Dominicana</p>
        </footer>

      </main>
    </>
  )
}
