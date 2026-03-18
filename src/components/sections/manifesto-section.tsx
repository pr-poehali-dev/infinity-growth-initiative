import { motion } from "framer-motion"

export function ManifestoSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text left */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-left bg-gradient-to-r from-rose-800 via-pink-400 to-rose-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          An enthusiastic artist passionate about the worlds of Hoyoverse and anime. In every work, I strive to convey
          not only the appearance of characters but also their personality and story. My art is an exploration of
          beloved universes through the lens of artistic vision, where traditional techniques meet modern asian pop culture.
        </motion.p>

        {/* Image right */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://cdn.poehali.dev/projects/6dc03441-c152-42c8-a40f-e0393d02aa14/bucket/d42fe804-1d4b-46b1-9a9a-becd4466a301.png"
            alt="Very Cherry art"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}
