import Header from "../components/layouts/Header"
import BubblesParticles from "../components/ui/HeroBaner/HeroBanner"
import Advantages from "../components/ui/advantages/Advantages"

const MainPage = () => {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden bg-[#0a0a0a]">
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
          <BubblesParticles />
          <Advantages />
        </div>
      </div>

    </>
  )
}

export default MainPage