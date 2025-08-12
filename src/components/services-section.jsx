
"use client"

import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="min-h-screen  flex items-center justify-center ">
      <div className=" px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-4xl p-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 lg:pr-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-700 leading-tight">
                Book a Complimentary Virtual or In-Person appointment at one of our stores, and let our jewelry
                specialists guide you every step of the way.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                size="lg"
                className="px-8 py-3 bg-stone-600 hover:bg-stone-700 text-white border border-stone-600 rounded-none font-medium tracking-wide transition-all duration-300"
              >
                VISIT SHOWROOM
              </button>
              <button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white bg-transparent rounded-none font-medium tracking-wide transition-all duration-300"
              >
                BOOK A VIRTUAL APPOINTMENT
              </button>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute bg-white p-2 rounded-full -left-14 top-1/2 transform -translate-y-1/2 z-10" >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-green-300 backdrop-blur-sm rounded-full flex items-center justify-center   transition-all duration-300"
              >
                <ChevronLeft className="w-10 h-10 text-stone-600" />
              </motion.button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://retaildesignblog.net/wp-content/uploads/2014/07/MAHARAJA-diamond-jewelry-by-Ichiro-Nishiwaki-Design-Office-Osaka-Japan-02.jpg"
                alt="Luxury Jewelry Showroom Interior"
                className="w-full h-full object-cover"
              />
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
