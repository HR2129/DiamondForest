"use client"

import { motion } from "framer-motion"
import { Truck, Gift, Headphones, RotateCcw } from "lucide-react"

export function ServiceFeatures() {
  const features = [
    {
      icon: Truck,
      title: "Complimentary delivery",
      description: "READ MORE",
    },
    {
      icon: Gift,
      title: "Luxury packaging",
      description: "READ MORE",
    },
    {
      icon: Headphones,
      title: "At your service",
      description: "READ MORE",
    },
    {
      icon: RotateCcw,
      title: "Easy returns & exchanges",
      description: "READ MORE",
    },
  ]

  return (
    
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

  )
}
