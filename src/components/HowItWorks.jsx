import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PhoneIcon, MessageIcon, TruckIcon, CoffeeIcon } from './Icons'

const steps = [
  { num: '01', Icon: PhoneIcon, title: 'Escolha seu sabor', text: 'Navegue pelo nosso cardápio e escolha entre os 6 sabores gourmet exclusivos.' },
  { num: '02', Icon: MessageIcon, title: 'Faça seu pedido', text: 'Entre em contato pelo WhatsApp e confirme os detalhes da sua encomenda.' },
  { num: '03', Icon: TruckIcon, title: 'Receba em casa', text: 'Seu café gourmet é preparado com cuidado e entregue onde você estiver em Lauro de Freitas.' },
  { num: '04', Icon: CoffeeIcon, title: 'Aproveite', text: 'Saboreie momentos memoráveis sem sair de casa. Experiência gourmet no conforto do seu lar.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="como-funciona"
      className="py-24 px-[5%]"
      style={{ background: 'var(--marrom-dark)', color: 'var(--creme)' }}
    >
      <div ref={ref} className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
          style={{ color: 'var(--creme-dark)' }}
        >
          Simples e rápido
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.15]"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--creme)' }}
        >
          Como funciona<br />
          <em style={{ fontStyle: 'italic', color: 'var(--creme-dark)' }}>a sua encomenda</em>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
            className="text-center px-5 py-8 rounded-2xl relative group"
            style={{ background: 'rgba(255,245,184,0.05)', border: '1px solid rgba(255,245,184,0.08)' }}
            whileHover={{ background: 'rgba(255,245,184,0.09)', border: '1px solid rgba(255,245,184,0.18)', y: -6, transition: { duration: 0.15 } }}
            whileTap={{ background: 'rgba(255,245,184,0.09)', border: '1px solid rgba(255,245,184,0.18)', y: -4, scale: 0.99 }}
          >
            <motion.div
              className="font-light leading-none mb-2 inline-block"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', color: 'rgba(255,245,184,0.55)' }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {step.num}
            </motion.div>
            <div className="flex justify-center mb-4">
              <step.Icon size={28} color="rgba(255,245,184,0.75)" />
            </div>
            <div
              className="mb-3"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--creme)' }}
            >
              {step.title}
            </div>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,245,184,0.6)', lineHeight: 1.7 }}>
              {step.text}
            </p>

            {/* Connector arrow (not on last) */}
            {i < steps.length - 1 && (
              <div
                className="absolute top-1/2 -right-3 -translate-y-1/2 text-xl hidden lg:block"
                style={{ color: 'rgba(255,245,184,0.2)', zIndex: 1 }}
              >
                ›
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
