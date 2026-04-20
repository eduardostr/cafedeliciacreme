import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5571994113878?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Caf%C3%A9%20Del%C3%ADcia%20Creme!'

export default function WhatsAppButton() {
  return (
    <div className="fixed z-50" style={{ bottom: 28, right: 28 }}>
      {/* Soft glow pulse */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: '#25D366' }}
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 58,
          height: 58,
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12, boxShadow: '0 8px 28px rgba(37,211,102,0.55)', y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.505L4 29l7.695-1.805A11.945 11.945 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
            fill="white"
          />
          <path
            d="M21.5 18.3c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.48.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="#25D366"
          />
        </svg>

        {/* Dot indicator */}
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 12,
            height: 12,
            background: '#ff4d4d',
            border: '2px solid #fff',
            top: 1,
            right: 1,
          }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </div>
  )
}
