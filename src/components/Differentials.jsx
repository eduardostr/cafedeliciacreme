import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldIcon, TruckIcon, AwardIcon, MapPinIcon, SparkleIcon, HeartIcon } from './Icons'

const items = [
  { Icon: ShieldIcon, title: '100% sem glúten', text: 'Todos os nossos sabores são certificados sem glúten, ideais para celíacos e quem cuida da saúde.' },
  { Icon: AwardIcon, title: 'Café verdadeiramente gourmet', text: 'Ingredientes selecionados e preparo artesanal que elevam cada xícara a uma experiência única.' },
  { Icon: SparkleIcon, title: 'Sabores exclusivos', text: 'Combinações criativas e irresistíveis que você não encontra em nenhum outro lugar da região.' },
  { Icon: HeartIcon, title: 'Momentos memoráveis', text: 'Cada pedido é uma experiência pensada para transformar sua rotina em algo especial.' },
  { Icon: TruckIcon, title: 'Entrega sob encomenda', text: 'Modelo exclusivo de delivery — sem loja física, com foco total na qualidade e conveniência.' },
  { Icon: MapPinIcon, title: 'Referência em Lauro de Freitas', text: 'Atendemos Lauro de Freitas e adjacências com pontualidade e compromisso de excelência.' },
]

function DiffItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ borderColor: 'rgba(193,105,32,0.4)', y: -3, transition: { duration: 0.15 } }}
      whileTap={{ borderColor: 'rgba(193,105,32,0.4)', y: -2, scale: 0.99 }}
      className="flex gap-5 items-start p-6 rounded-2xl"
      style={{ background: '#fff', border: '1px solid rgba(193,105,32,0.15)' }}
    >
      <motion.div
        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
        style={{ background: '#96500f' }}
        whileHover={{ scale: 1.12, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <item.Icon size={20} color="var(--creme)" />
      </motion.div>
      <div>
        <div
          className="mb-1.5"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--marrom-dark)' }}
        >
          {item.title}
        </div>
        <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-mid)', lineHeight: 1.65 }}>
          {item.text}
        </p>
      </div>
    </motion.div>
  )
}

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diferenciais" className="py-24 px-[5%]" style={{ background: '#ffffff', scrollMarginTop: '80px' }}>
      <div ref={ref} className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
          style={{ color: 'var(--marrom)' }}
        >
          Por que nos escolher
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.15]"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--marrom-dark)' }}
        >
          Nossos{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--marrom)' }}>diferenciais</em>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <DiffItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
