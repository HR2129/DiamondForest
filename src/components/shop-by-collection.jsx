"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ShopByCollection() {
  const collections = [
    { name: "EARRINGS", image: "/earring.jpg" },
    { name: "RINGS", image: "/ring.jpg" },
    { name: "NECKLACES", image: "/necklace.jpg" },
    { name: "BRACELETS", image: "/bracelet.jpg" },
  ]

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SHOP BY COLLECTION</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured collection
            <br />
            Explore the exclusive pieces inspired by the beauty of nature
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {collection.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
