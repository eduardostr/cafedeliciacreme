import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CoffeeIcon, FlameIcon, DropIcon, LeafIcon, LayersIcon, StarIcon } from './Icons'

const flavors = [
  {
    Icon: CoffeeIcon,
    name: 'Tradicional',
    image: '/Tradicional.png',
    desc: 'O clássico gourmet, puro e intenso. Para quem ama o café em sua essência mais refinada.',
    tags: ['0% Glúten', '0% Lactose', 'Clássico'],
    featured: true,
  },
  {
    Icon: FlameIcon,
    name: 'Churros',
    image: '/Churros.png',
    desc: 'A doçura e canela do churros encontram a intensidade do café gourmet. Uma combinação irresistível.',
    tags: ['0% Glúten', 'Sabor único'],
  },
  {
    Icon: DropIcon,
    name: 'Nutella',
    image: '/Nutella.png',
    desc: 'Avelã e chocolate com café gourmet. Um abraço em xícara para os amantes do chocolate.',
    tags: ['0% Glúten', 'Cremoso'],
  },
  {
    Icon: LeafIcon,
    name: 'Paçoca',
    image: '/Paçoca.png',
    desc: 'O sabor tipicamente brasileiro da paçoca em perfeita harmonia com o café gourmet da casa.',
    tags: ['0% Glúten', 'Brasileiro'],
  },
  {
    Icon: LayersIcon,
    name: 'Cappuccino',
    image: '/Cappuccino.png',
    desc: 'O cappuccino reinventado no conceito gourmet — suave, aveludado e com a cremosidade perfeita.',
    tags: ['0% Glúten', 'Aveludado'],
  },
  {
    Icon: StarIcon,
    name: 'Ovomaltine',
    image: '/Ovomaltine.png',
    desc: 'O sabor nostálgico e crocante do Ovomaltine elevado ao nível gourmet. Surpreendente a cada gole.',
    tags: ['0% Glúten', 'Especial'],
  },
]

function FlavorCard({ flavor, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={flavor.featured ? {} : { y: -6, boxShadow: '0 16px 40px rgba(193,105,32,0.15)', transition: { duration: 0.15 } }}
      whileTap={flavor.featured ? { scale: 0.98 } : { y: -4, boxShadow: '0 12px 32px rgba(193,105,32,0.18)', scale: 0.99 }}
      className="rounded-2xl relative overflow-hidden cursor-pointer flex flex-col"
      style={
        flavor.featured
          ? { background: 'linear-gradient(135deg, #96510f 0%, #c16920 100%)', border: 'none' }
          : { background: '#fff', border: '1px solid rgba(193,105,32,0.15)' }
      }
    >
      {/* Hover accent bar for non-featured */}
      {!flavor.featured && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: 'var(--marrom)', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Image */}
      <div className="w-full overflow-hidden" style={{ height: 200 }}>
        <motion.img
          src={flavor.image}
          alt={flavor.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div
          className="text-xl mb-3"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: flavor.featured ? 'var(--creme)' : 'var(--marrom-dark)',
          }}
        >
          {flavor.name}
        </div>

        <p
          className="text-sm font-light leading-relaxed mb-4 flex-1"
          style={{ color: flavor.featured ? 'rgba(255,245,184,0.8)' : 'var(--text-mid)', lineHeight: 1.65 }}
        >
          {flavor.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {flavor.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide"
              style={
                flavor.featured
                  ? { background: 'rgba(255,245,184,0.2)', color: 'var(--creme)', border: '1px solid rgba(255,245,184,0.4)' }
                  : { background: 'var(--creme)', color: 'var(--marrom)', border: '1px solid rgba(193,105,32,0.3)' }
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Flavors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sabores" className="py-24 px-[5%]" style={{ background: '#ffffff' }}>
      <div ref={ref} className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
          style={{ color: 'var(--marrom)' }}
        >
          Nosso cardápio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.15]"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--marrom-dark)' }}
        >
          Escolha o seu{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--marrom)' }}>sabor favorito</em>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flavors.map((f, i) => (
          <FlavorCard key={f.name} flavor={f} index={i} />
        ))}
      </div>
    </section>
  )
}
