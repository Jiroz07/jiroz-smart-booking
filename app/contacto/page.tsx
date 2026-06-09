"use client"
import { useForm, ValidationError } from '@formspree/react'

export default function ContactoPage() {
  const [state, handleSubmit] = useForm("meewkagd")

  if (state.succeeded) {
    return (
      <main className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#E8453C]/10 border-2 border-[#E8453C] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-black text-white mb-3">¡Recibido!</h2>
          <p className="text-neutral-400 mb-8">Te contactaré en menos de 24 horas para coordinar los detalles de tu proyecto.</p>
          <a href="/" className="bg-[#E8453C] hover:bg-[#c73a33] text-white font-bold px-8 py-3 rounded-full transition-all duration-200">
            Volver al inicio
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen px-6 py-24">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur border-b border-white/5 z-50 px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#E8453C] rounded-lg flex items-center justify-center text-white font-black text-sm">J</div>
          <span className="text-base font-bold tracking-tight text-white">Jiroz <span className="text-[#E8453C]">Smart Booking</span></span>
        </a>
      </nav>

      <div className="max-w-2xl mx-auto pt-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#E8453C] text-xs font-bold uppercase tracking-widest">Nuevo Proyecto</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
            Cuéntame tu idea
          </h1>
          <p className="text-neutral-500 text-lg">Completa el formulario y me pondré en contacto contigo en menos de 24 horas.</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* DATOS PERSONALES */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest text-[#E8453C]">Sobre ti</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-2">Nombre completo *</label>
                <input type="text" name="nombre" required placeholder="Ej: María Rodríguez"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
                <ValidationError field="nombre" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-2">Nombre del negocio *</label>
                <input type="text" name="negocio" required placeholder="Ej: Salón Beauty Pro"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">Tipo de negocio *</label>
              <input type="text" name="tipo_negocio" required placeholder="Ej: Clínica dental, Salón de belleza, Restaurante..."
                className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-2">WhatsApp *</label>
                <input type="tel" name="whatsapp" required placeholder="Ej: 829-000-0000"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-2">Email</label>
                <input type="email" name="email" placeholder="tucorreo@gmail.com"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
                <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
            </div>
          </div>

          {/* PROYECTO */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest text-[#E8453C]">Sobre el proyecto</h3>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-3">¿Qué necesitas? *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["Sistema de citas online", "Página web", "Software personalizado"].map((op) => (
                  <label key={op} className="flex items-center gap-3 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-4 py-3 cursor-pointer transition-colors group">
                    <input type="checkbox" name="servicio" value={op}
                      className="accent-[#E8453C] w-4 h-4 cursor-pointer" />
                    <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">{op}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">¿Tienes página web actualmente?</label>
                <div className="flex gap-3">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-5 py-3 cursor-pointer transition-colors">
                      <input type="radio" name="tiene_web" value={op} className="accent-[#E8453C]" />
                      <span className="text-neutral-300 text-sm">{op}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">¿Tienes logo y colores definidos?</label>
                <div className="flex gap-3">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-5 py-3 cursor-pointer transition-colors">
                      <input type="radio" name="tiene_logo" value={op} className="accent-[#E8453C]" />
                      <span className="text-neutral-300 text-sm">{op}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">Describe lo que quieres lograr *</label>
              <textarea name="descripcion" required rows={4} placeholder="Ej: Quiero que mis clientes puedan agendar citas sin llamarme, que les llegue confirmación por WhatsApp..."
                className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600 resize-none" />
              <ValidationError field="descripcion" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">¿Tienes alguna página de referencia que te guste?</label>
              <input type="text" name="referencia" placeholder="Ej: https://ejemplo.com"
                className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600" />
            </div>
          </div>

          {/* PRESUPUESTO Y TIEMPO */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest text-[#E8453C]">Presupuesto y tiempo</h3>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-3">Presupuesto aproximado *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Menos de RD$15,000", "RD$15,000 - RD$30,000", "RD$30,000 - RD$60,000", "Más de RD$60,000"].map((op) => (
                  <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-3 py-3 cursor-pointer transition-colors text-center">
                    <input type="radio" name="presupuesto" value={op} required className="accent-[#E8453C] flex-shrink-0" />
                    <span className="text-neutral-300 text-xs">{op}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">¿Cuándo necesitas el sistema listo? *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Lo antes posible", "En 1 mes", "En 2-3 meses", "Sin prisa"].map((op) => (
                  <label key={op} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-[#E8453C]/50 rounded-xl px-3 py-3 cursor-pointer transition-colors">
                    <input type="radio" name="tiempo" value={op} required className="accent-[#E8453C]" />
                    <span className="text-neutral-300 text-xs">{op}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">Notas adicionales</label>
              <textarea name="notas" rows={3} placeholder="Cualquier otra información que quieras compartir..."
                className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#E8453C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-600 resize-none" />
            </div>
          </div>

          {/* SUBMIT */}
          <button type="submit" disabled={state.submitting}
            className="w-full bg-[#E8453C] hover:bg-[#c73a33] disabled:opacity-50 text-white font-bold py-5 rounded-2xl text-lg transition-all duration-200 shadow-lg shadow-[#E8453C]/20">
            {state.submitting ? "Enviando..." : "Enviar solicitud →"}
          </button>

          <p className="text-center text-neutral-600 text-xs">
            Te respondo en menos de 24 horas · thejiroz@gmail.com
          </p>

        </form>
      </div>
    </main>
  )
}
