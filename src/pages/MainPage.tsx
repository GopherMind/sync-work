import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import BubblesParticles from "../components/ui/HeroBaner/HeroBanner"
import Advantages from "../components/ui/advantages/Advantages"
import OrdersFeed from "../components/ui/orders/OrdersFeed"
import Testimonials from "../components/ui/testimonials/Testimonials"
import HowItWorks from "../components/ui/howItWorks/HowItWorks"

const MainPage = () => {
  return (
    <div className="scroll-smooth">
      <Header />

      <div className="relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, #0f0500 100%)" }}>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,106,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-[520px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,106,0,0.18) 0%, rgba(255,106,0,0.08) 28%, transparent 72%)",
          }}
        />

        <div className="relative z-[1]">
          <div className="relative">
            <BubblesParticles />

            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[20]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,5,0,0) 0%, rgba(15,5,0,0.36) 45%, rgba(10,10,10,0.92) 90%, rgba(10,10,10,1) 100%)",
              }}
            />
          </div>

          <Advantages />
          <OrdersFeed />
          <Testimonials />
          <HowItWorks />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MainPage