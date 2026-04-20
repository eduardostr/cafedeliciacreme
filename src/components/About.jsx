import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { num: '6', label: 'Sabores exclusivos e artesanais' },
  { num: '0%', label: 'Glúten em todos os sabores' },
  { num: '100%', label: 'Gourmet por encomenda' },
  { num: '★★★★★', label: 'Excelência e conveniência' },
]

const chips = ['Lauro de Freitas', 'Entregas sob encomenda', 'Café Gourmet', 'Sem visitar loja física']

function StatCard({ num, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl p-6"
      style={{ background: 'rgba(255,245,184,0.1)', border: '1px solid rgba(255,245,184,0.2)' }}
    >
      <div
        className="leading-none mb-2"
        style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', color: 'var(--creme)' }}
      >
        {num}
      </div>
      <div className="text-sm font-light" style={{ color: 'rgba(255,245,184,0.7)' }}>{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sobre"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-20 px-[5%]"
      style={{ background: '#96500f', color: 'var(--creme)', scrollMarginTop: '80px' }}
    >
      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.15em] uppercase mb-4"
          style={{ color: 'var(--creme-dark)' }}
        >
          Nossa história
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.15] mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
        >
          Gourmet com o<br />
          <em style={{ fontStyle: 'italic', color: 'var(--creme-dark)' }}>conceito mais atual</em>
          <br />do mercado.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-light leading-relaxed mb-5"
          style={{ color: 'rgba(255,245,184,0.85)', fontSize: '1rem', lineHeight: 1.8 }}
        >
          O Café Delícia Creme nasceu no coração de uma mulher dedicada e batalhadora chamada Rosi Dantas
          e foi criado para oferecer o conceito mais atual do mercado de café gourmet — operando exclusivamente
          no modelo de entregas sob encomenda, semelhante ao fast food.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="font-light leading-relaxed mb-8"
          style={{ color: 'rgba(255,245,184,0.85)', fontSize: '1rem', lineHeight: 1.8 }}
        >
          Nosso compromisso com a excelência e a conveniência fazem do Café Delícia Creme uma referência
          em cafés gourmet em Lauro de Freitas e adjacências, proporcionando momentos memoráveis a cada pedido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap gap-2"
        >
          {chips.map((c) => (
            <span
              key={c}
              className="text-sm px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(255,245,184,0.15)',
                border: '1px solid rgba(255,245,184,0.3)',
                color: 'var(--creme)',
              }}
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.num} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
