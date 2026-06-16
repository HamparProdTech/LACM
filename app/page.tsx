import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Mission from '@/components/Mission'
import Strategies from '@/components/Strategies'
import Insights from '@/components/Insights'
import History from '@/components/History'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Mission />
      <Strategies />
      <Insights />
      <History />
      <CTABand />
      <Footer />
    </main>
  )
}
