import { useRef } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 mx-0 rounded-0"
    >
      {/* Fullscreen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/6dc03441-c152-42c8-a40f-e0393d02aa14/bucket/cc1b9854-9a7d-4ef2-8b8c-856f6da2e0cd.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>



      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex flex-col items-end gap-3">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-rose-50">
            Brush Through Worlds: <em className="italic text-rose-400">from Teyvat</em> to Anime Universes.
          </h1>
          <p className="font-serif italic text-rose-500 text-lg md:text-xl tracking-wide">— Very Cherry</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}