import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  Hero,
  Approach,
  Investments,
  Testimonial,
  Team,
  Contact,
  Newsletter,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Investments />
        <Testimonial />
        <Team />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
