"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { ShopByCollection } from "./shop-by-collection"


export function HeroSection() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <div className="min-h-screen ">
      

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[85vh]  overflow-hidden p-20">
          <img
            src="data:image/jpeg;base64,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"
            alt="Featured collection - hands wearing jewelry"
            className="w-full h-full object-cover rounded-4xl"
          />
          
          <div className="absolute bottom-56 left-96 text-white">
            <h2 className="text-3xl font-light italic mb-2">Featured collection</h2>
            <p className="text-sm opacity-90">
              Explore the exclusive pieces, inspired
              <br />
              by the beauty of nature
            </p>
          </div>
        </div>

        {/* Arrow and Dropdown Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          {/* Arrow */}
          <div className="flex justify-center -mt-36 relative z-10 ">
            <div className="bg-stone-50 rounded-full p-4 shadow-lg cursor-pointer border border-stone-200 shake-animation">
              <ChevronDown
                className={`w-10 h-10 text-stone-600 transition-transform duration-300 ${
                  isDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Shop by Category Dropdown */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isDropdownVisible ? "max-h-[1800px]  sm:max-h-[1000px]  opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ShopByCollection/>
          </div>
        </div>
      </section>

      {/* Additional Content Space */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light text-stone-800 mb-4">Discover Our Collections</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each piece in our collection is carefully crafted to capture the essence of nature's beauty, bringing you
              timeless elegance and sophisticated design.
            </p>
          </div>
        </div>
      </section>

      {/* Design Your Own Component */}
     
    </div>
  )
}
