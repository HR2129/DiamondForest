// "use client"

// import { motion } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"

// export function DesignYourRing() {
//   return (
//     <section className="min-h-screen  flex items-center py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif text-stone-700 tracking-wide">DESIGN YOUR OWN RING</h2>
//         </motion.div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-3 gap-8 items-center">
//           {/* Ring Setting Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
//           >
//             {/* Ring Icon */}
//             <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-12 h-12 text-stone-600"
//               >
//                 <circle cx="12" cy="12" r="3" />
//                 <path d="M12 1v6m0 6v6" />
//                 <path d="m21 12-6-6-6 6-6-6" />
//               </svg>
//             </div>

//             <h3 className="text-2xl font-serif text-stone-800 mb-4">RING SETTING</h3>

//             <p className="text-stone-600 mb-8 leading-relaxed">
//               Elevate your love story with our exquisite collection of engagement ring designs.
//             </p>

//             <button
//               variant="outline"
//               size="lg"
//               className="border-stone-400 text-white bg-stone-700 hover:scale-105 active:scale-95 px-8 py-3 rounded-full"
//             >
//               Start with a Setting
//             </button>

//             {/* Navigation Arrow */}
//             {/* <motion.div
//               whileHover={{ x: 5 }}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
//             >
//               <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors">
//                 <ChevronRight className="w-6 h-6 text-white" />
//               </div>
//             </motion.div> */}
//             <motion.div
//               whileHover={{ x: 5 }}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
//             >
//               <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors">
//                 <ChevronLeft className="w-6 h-6 text-white" />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Center Ring Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative aspect-square max-w-md mx-auto">
//               <img src="https://png.pngtree.com/png-clipart/20250807/original/pngtree-white-gold-ring-with-5-carat-diamond-on-pedestal-in-jewelry-png-image_21644378.png" alt="Diamond Engagement Ring" fill className="object-contain" />
//               {/* <Image src="/diamond-ring.png" alt="Diamond Engagement Ring" fill className="object-contain" /> */}
//             </div>
//           </motion.div>

//           {/* Center Stone Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 relative"
//           >
//             {/* Diamond Icon */}
//             <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-12 h-12 text-stone-600"
//               >
//                 <path d="M6 3h12l4 6-10 11L2 9l4-6z" />
//                 <path d="M11 3 8 9l4 11 4-11-3-6" />
//                 <path d="M2 9h20" />
//               </svg>
//             </div>

//             <h3 className="text-2xl font-serif text-stone-800 mb-4">CENTER STONE</h3>

//             <p className="text-stone-600 mb-8 leading-relaxed">
//               Explore our stunning diamond collection and discover the brilliance in every choice.
//             </p>

//             <button
//               variant="outline"
//               size="lg"
//               className="border-stone-400 text-white bg-stone-700 hover:scale-105 active:scale-95  px-8 py-3 rounded-full"
//             >
//               Start with a Stone
//             </button>

//             {/* Navigation Arrow */}
//             <motion.div
//               whileHover={{ x: -5 }}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
//             >
//               <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors">
//                 <ChevronLeft className="w-6 h-6 text-white" />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

       
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function DesignYourRing() {
  return (
    <section className=" flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-stone-700 tracking-wide">DESIGN YOUR OWN RING</h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-center relative">
          {/* Ring Setting Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-sm hover:shadow-md transition-shadow duration-300 relative min-h-[400px] md:min-h-[500px] flex flex-col justify-center"
          >
            {/* Ring Icon */}
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-16 h-16 text-stone-600"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6" />
                <path d="m21 12-6-6-6 6-6-6" />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6">RING SETTING</h3>

            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
              Elevate your love story with our exquisite collection of engagement ring designs.
            </p>

            <button className="border-2 border-stone-400 text-stone-700 hover:bg-stone-700 hover:text-white bg-transparent px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95">
              Start with a Setting
            </button>

            <motion.div
              whileHover={{ x: 5 }}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10"
            >
              <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors shadow-lg">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Center Ring Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <img src="https://png.pngtree.com/png-clipart/20250807/original/pngtree-white-gold-ring-with-5-carat-diamond-on-pedestal-in-jewelry-png-image_21644378.png" alt="Diamond Engagement Ring" fill className="object-contain" />
              {/* <Image src="/diamond-ring.png" alt="Diamond Engagement Ring" fill className="object-contain" /> */}
            </div>
          </motion.div>

          {/* Center Stone Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-sm hover:shadow-md transition-shadow duration-300 relative min-h-[400px] md:min-h-[500px] flex flex-col justify-center"
          >
            {/* Diamond Icon */}
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-16 h-16 text-stone-600"
              >
                <path d="M6 3h12l4 6-10 11L2 9l4-6z" />
                <path d="M11 3 8 9l4 11 4-11-3-6" />
                <path d="M2 9h20" />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6">CENTER STONE</h3>

            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
              Explore our stunning diamond collection and discover the brilliance in every choice.
            </p>

            <button className="border-2 border-stone-400 text-stone-700 hover:bg-stone-700 hover:text-white bg-transparent px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95">
              Start with a Stone
            </button>

            <motion.div
              whileHover={{ x: -5 }}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10"
            >
              <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors shadow-lg">
                <ChevronLeft className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}
