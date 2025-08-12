"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BestsellersSection() {
  const bestsellers = [
    {
      name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
      image: "/diamond-tennis-bracelet.png",
    },
    {
      name: "Zuri Diamond Huggie Earrings in 14k White Gold",
      image: "/placeholder-cbpaj.png",
    },
    {
      name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)",
      image: "/sapphire-diamond-bracelet.png",
    },
    {
      name: "Baguette Diamond Cluster Hoop Earrings",
      image: "/baguette-diamond-hoop-earrings.png",
    },
  ]

  return (
    <section className=" flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">OUR BESTSELLERS</h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium text-stone-900 line-clamp-3 leading-relaxed">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
          className="text-center m-10"
        >
          <button
            variant="outline"
            size="lg"
            className="hover:bg-white  active:scale-90 hover:text-stone-900 bg-stone-900 text-white  px-8 py-4"
          >
            EXPLORE MORE
          </button>
        </motion.div>
      </div>
    </section>
  )
}
