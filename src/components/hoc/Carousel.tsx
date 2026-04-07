import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import type { ReactNode } from "react"

interface CarouselProps {
  children: ReactNode[]
  autoPlay?: boolean
  autoSlideInterval?: number
}

const Carousel = ({ children, autoPlay = false, autoSlideInterval = 4000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = children.length

  const handlePrev = useCallback(
    () => setCurrentIndex((p) => (p === 0 ? total - 1 : p - 1)),
    [total]
  )

  const handleNext = useCallback(
    () => setCurrentIndex((p) => (p === total - 1 ? 0 : p + 1)),
    [total]
  )

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(handleNext, autoSlideInterval)
    return () => clearInterval(id)
  }, [handleNext, autoPlay, autoSlideInterval])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, i) => (
          <div key={i} className="min-w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 flex items-center justify-center rounded-full
                   bg-orange-500/10 border border-orange-500/30
                   text-orange-400 hover:bg-orange-500/25 transition-colors duration-200 "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 flex items-center justify-center rounded-full
                   bg-orange-500/10 border border-orange-500/30
                   text-orange-400 hover:bg-orange-500/25 transition-colors duration-200"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300
                        ${currentIndex === i
                          ? "w-7 bg-orange-500"
                          : "w-2 bg-orange-500/30"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500/10">
        <div
          className="h-full bg-gradient-to-r from-orange-700 to-orange-400 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default Carousel