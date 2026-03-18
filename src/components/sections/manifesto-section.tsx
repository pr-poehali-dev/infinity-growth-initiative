import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative flex flex-col items-center gap-16">
        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center text-foreground/10">
            Каждая картина —
            <br />
            это разговор без слов.
          </h2>

          {/* Gradient mask reveal text */}
          <motion.h2
            className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center bg-gradient-to-r from-rose-800 via-pink-400 to-rose-800 bg-clip-text text-transparent"
            style={{ clipPath }}
          >
            Каждая картина —
            <br />
            это разговор без слов.
          </motion.h2>
        </div>

        <motion.p
          className="max-w-2xl text-center text-muted-foreground leading-relaxed text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          An enthusiastic artist passionate about the worlds of Hoyoverse and anime. In every work, I strive to convey
          not only the appearance of characters but also their personality and story. My art is an exploration of
          beloved universes through the lens of artistic vision, where traditional techniques meet modern asian pop culture.
        </motion.p>
      </div>
    </section>
  )
}