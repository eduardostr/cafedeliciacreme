import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5571994113878?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Caf%C3%A9%20Del%C3%ADcia%20Creme!'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const float = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatDelayed = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section
      id="inicio"
      className="relative min-h-screen grid items-center overflow-hidden px-[5%] pt-24 pb-16 grid-cols-1 md:grid-cols-2"
      style={{ background: '#ffffff' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 80% 50%, #f5e2cc 0%, transparent 70%)' }}
      />

      {/* Text side */}
      <div className="relative z-10">
        <motion.h1
          {...fadeUp(0.2)}
          className="leading-[1.05] mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 7.5vw, 5.5rem)',
            color: 'var(--marrom-dark)',
          }}
        >
          O café que você<br />
          merece,{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--marrom)' }}>entregue</em>
          <br />
          até você.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mb-10 font-light leading-relaxed"
          style={{ fontSize: '1.05rem', color: 'var(--text-mid)', maxWidth: 430 }}
        >
          Cafés gourmet saborizados, sem glúten, feitos com excelência e entregues onde você estiver.
          <br />Entregamos em Lauro de Freitas e adjacências.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex gap-4 items-center flex-wrap">
          <motion.button
            onClick={() => scrollTo('#pedir')}
            className="text-sm font-medium px-8 py-3.5 rounded-full border-none cursor-pointer"
            style={{
              background: 'var(--marrom)',
              color: 'var(--creme)',
              boxShadow: '0 4px 20px rgba(193,105,32,0.35)',
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 28px rgba(193,105,32,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Fazer meu pedido
          </motion.button>

          <motion.button
            onClick={() => scrollTo('#sabores')}
            className="text-sm font-medium flex items-center gap-2 border-none bg-transparent cursor-pointer"
            style={{ color: 'var(--marrom)' }}
            whileHover={{ y: -2 }}
          >
            Ver sabores <span>→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Visual side */}
      <div className="flex justify-center items-center relative mt-10 md:mt-0">
        <div className="relative w-[220px] h-[220px] md:w-[360px] md:h-[360px]">
          {/* Favicon image with float */}
          <motion.img
            src="/favicon.png"
            alt="Café Delícia Creme"
            className="relative z-10 w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{ opacity: { duration: 0.7, delay: 0.3 }, scale: { duration: 0.7, delay: 0.3 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          />

        </div>
      </div>
    </section>
  )
}
