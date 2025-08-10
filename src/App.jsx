import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Features from './components/features/Features.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import CallToAction from './components/CallToAction.jsx'
function App() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </div>
  )
}


export default App
