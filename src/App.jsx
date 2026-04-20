import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Flavors from './components/Flavors'
import HowItWorks from './components/HowItWorks'
import Differentials from './components/Differentials'
import { CTA, Footer } from './components/CtaFooter'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Flavors />
      <HowItWorks />
      <Differentials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
