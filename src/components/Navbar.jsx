import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_LINK = 'https://wa.me/5571994113878?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Caf%C3%A9%20Del%C3%ADcia%20Creme!'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#sabores' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#pedir' },
  ]

  const scrollTo = (href) => {
    setMenuOpen(false)
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5"
      style={{
        background: '#fff5b8',
        borderBottom: '1px solid rgba(193,105,32,0.18)',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <motion.img
        src="/logoCafe.png"
        alt="Café Delícia Creme"
        className="h-12 w-auto cursor-pointer"
        whileHover={{ scale: 1.03 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <motion.button
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium tracking-widest uppercase cursor-pointer border-none bg-transparent"
              style={{ color: 'var(--text-mid)' }}
              whileHover={{ color: 'var(--marrom)', y: -1 }}
              transition={{ duration: 0.15 }}
            >
              {l.label}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer border-none bg-transparent p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-0.5 w-6 rounded"
            style={{ background: 'var(--marrom)' }}
            animate={menuOpen
              ? i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }
              : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.25 }}
          />
        ))}
      </button>

      {/* Overlay to close menu on outside click */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 flex flex-col items-center gap-5 py-8"
            style={{ background: '#fff5b8', borderBottom: '1px solid rgba(193,105,32,0.18)' }}
          >
            {links.map((l) => (
              <motion.button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium tracking-widest uppercase cursor-pointer border-none bg-transparent"
                style={{ color: 'var(--text-mid)' }}
                whileHover={{ color: 'var(--marrom)', y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
