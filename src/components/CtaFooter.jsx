import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WA_LINK = 'https://wa.me/5571994113878?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Caf%C3%A9%20Del%C3%ADcia%20Creme!'
const IG_LINK = 'https://www.instagram.com/ocafedeliciaof/'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="pedir"
      className="relative py-24 px-[5%] text-center overflow-hidden"
      style={{ background: '#96500f' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600, height: 600, marginTop: -100,
          background: 'radial-gradient(circle, rgba(255,245,184,0.08) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="leading-[1.1] mb-5"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#ffffff' }}
        >
          Pronto para um café<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(255,245,184,0.9)' }}>diferente de tudo?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-light leading-relaxed mb-10 mx-auto"
          style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 480, lineHeight: 1.7 }}
        >
          Faça seu pedido agora pelo WhatsApp e receba seu café gourmet cremoso, sem sair de casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex gap-4 justify-center flex-wrap items-center"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base font-medium px-8 py-4 rounded-full text-white"
            style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 32px rgba(37,211,102,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon />
            Pedir pelo WhatsApp
          </motion.a>

          <motion.a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base font-medium px-8 py-4 rounded-full text-white"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              boxShadow: '0 4px 20px rgba(220,39,67,0.35)',
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 32px rgba(220,39,67,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            <InstagramIcon />
            Ver no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-4 px-[5%] py-10 text-center"
      style={{ background: '#fff5b8', color: '#7a3f0a' }}
    >
      <img src="/logoCafe.png" alt="Café Delícia Creme" className="h-10 w-auto" />
      <div className="text-sm font-medium" style={{ color: '#96500f' }}>
        © 2026 Café Delícia Creme. Todos os direitos reservados.
      </div>
    </footer>
  )
}
