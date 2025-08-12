"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GiftSections() {
  return (
    <section className="  flex items-center">
      <div className=" w-full">
         {/* Gift Edition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center  pt-10 "
        >
          <h3 className="text-4xl font-serif text-stone-900 mb-8">GIFT EDITION</h3>
        </motion.div>
        <div className="flex h-screen  mb-12 ">
          {/* Gifts for Him */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative  overflow-hidden h-[90%] w-[50%]"
          >
            <div className="absolute inset-0">
              <img src="https://content.diamondsbyme.com/JUSTIN/RINGS/V1/JUSTIN-RINGS-0.A-YG.B-DI-SQR.C-DI-SQR-V1.JPG?resize=400x400" alt="Gifts for Him"  className="object-cover w-full h-full " />
              {/* <Image src="/luxury-mens-jewelry-watches.png" alt="Gifts for Him" fill className="object-cover opacity-30 hover:scale-110" /> */}
            </div>
            <div className="relative p-8 h-full flex flex-col justify-center text-stone-900">
              <h3 className="text-3xl font-serif mb-6">GIFTS FOR HIM</h3>
              <button
                variant="outline"
                size="lg"
                className="border-white text-stone-900 p-2 hover:bg-stone-900 hover:text-white bg-transparent w-fit"
              >
                SHOP NOW
              </button>
            </div>
          </motion.div>

          {/* Gifts Under $999 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden h-[90%] w-[50%]"
          >
            <div className="absolute inset-0">
              <img src="https://t3.ftcdn.net/jpg/06/59/71/58/360_F_659715822_b7PEcD41Ndq8ySRZkp3reAKrLuOiXDnq.jpg" alt="Gifts Under $999"  className="w-full h-full object-cover " />
              {/* <Image src="/placeholder-upjqh.png" alt="Gifts Under $999" fill className="object-cover opacity-50" /> */}
            </div>
            <div className="relative p-8 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-6 text-white">GIFTS FOR HER</h3>
              <button size="lg" className="bg-transparent p-2 hover:bg-white hover:text-stone-900  text-white w-fit">
                SHOP NOW
              </button>
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  )
}
