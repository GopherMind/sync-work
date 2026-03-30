import type { advantagesType } from '../../types/advantages.types'

interface SlideProps {
  item: advantagesType
}

const Slide = ({ item }: SlideProps) => {
  const Icon = item.icon

  return (
    <div className="relative min-h-96 flex flex-col justify-center px-12 pb-14 pt-11 overflow-hidden bg-[#0f0500] isolate">
    {/* Grid overlay */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,106,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Glow top-right */}
    <div
      className="absolute -top-24 -right-16 w-96 h-96 rounded-full pointer-events-none z-0
                 bg-[radial-gradient(circle,rgba(255,100,0,0.20)_0%,transparent_70%)]"
    />

    {/* Glow bottom-left */}
    <div
      className="absolute -bottom-32 -left-10 w-80 h-80 rounded-full pointer-events-none z-0
                 bg-[radial-gradient(circle,rgba(200,60,0,0.14)_0%,transparent_70%)]"
    />

    <div className="relative z-10 flex items-center justify-between gap-10">
      <div className="flex-1 max-w-xl">
        <span
          className="inline-block mb-4 px-3 py-1 font-mono text-[10px] tracking-[4px] uppercase
                     text-orange-400 border border-orange-500/40 rounded-sm"
        >
          {item.label}
        </span>

        <h2 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white">
          {item.title}
        </h2>

        <p className="text-base leading-relaxed text-white/55 max-w-md">
          {item.description}
        </p>
      </div>

      <div className="relative flex-shrink-0 w-40 h-40 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-orange-500/20" />

        <div
          className="absolute inset-0 rounded-full border border-dashed border-orange-500/20 animate-spin [animation-duration:12s]"
        />

        <div
          className="w-28 h-28 rounded-full flex items-center justify-center border border-orange-500/40 bg-orange-500/10"
        >
          <Icon size={46} className="text-orange-400" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Slide