"use client"

import { motion } from "framer-motion"


export function NewsletterSection() {
  return (
    <section className=" bg-stone-100 flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-600 mb-6 italic">Subscribe to our newsletter</h2>
          <p className="text-lg md:text-xl text-stone-500 mb-12 max-w-2xl mx-auto">
            Be the first to know about our latest designs, exclusive offers and special events.
          </p>

          <div className="max-w-lg mx-auto space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="ENTER YOUR MAIL ID"
                className="w-full bg-transparent focus:outline-0 border-0 border-b-2 border-stone-300 rounded-none px-0 py-4 text-center text-stone-600 placeholder:text-stone-400 focus:border-stone-500 focus:ring-0 text-sm tracking-wider"
              />
            </div>
            <button className="bg-stone-600 hover:bg-stone-700 text-white px-12 py-3 rounded-none text-sm tracking-wider font-medium transition-colors duration-300">
              SUBMIT
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
