// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"

// const diamonds = [
//   {
//     name: "HEART",
//     image: "https://www.i-diamants.com/medias_upload/moxie/formes_du_diamant/diamant_emeraude_1_.jpg",
//     shape: "heart",
//   },
//   {
//     name: "PEAR",
//     image: "https://www.i-diamants.com/medias_upload/moxie/formes_du_diamant/diamant_poire.jpg",
//     shape: "pear",
//   },
//   {
//     name: "ROUND",
//     image: "https://www.i-diamants.com/medias_upload/moxie/formes_du_diamant/diamant-brillant-rond.jpg",
//     shape: "round",
//   },
//   {
//     name: "OVAL",
//     image: "https://www.i-diamants.com/medias_upload/moxie/formes_du_diamant/diamant-forme-ovale.jpg",
//     shape: "oval",
//   },
//   {
//     name: "MARQUISE",
//     image: "https://www.i-diamants.com/medias_upload/moxie/formes_du_diamant/diamant_princesse_.jpg",
//     shape: "marquise",
//   },
// ]

// export default function DiamondCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(2) // Start with ROUND in center
//   const [direction, setDirection] = useState(0) // Track slide direction

//   const nextDiamond = () => {
//     setDirection(1)
//     setCurrentIndex((prev) => (prev + 1) % diamonds.length)
//   }

//   const prevDiamond = () => {
//     setDirection(-1)
//     setCurrentIndex((prev) => (prev - 1 + diamonds.length) % diamonds.length)
//   }

//   const goToDiamond = (index) => {
//     setDirection(index > currentIndex ? 1 : -1)
//     setCurrentIndex(index)
//   }

//   const getExtendedDiamonds = () => {
//     // Create array with duplicates for seamless infinite scroll
//     return [...diamonds, ...diamonds, ...diamonds]
//   }

//   const extendedDiamonds = getExtendedDiamonds()
//   const centerOffset = diamonds.length // Offset to center position in extended array

//   return (
//     <section className="min-h-screen bg-stone-100 flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
//       {/* Title */}
//       <motion.h2
//         className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-600 mb-16 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         SHOP DIAMONDS
//       </motion.h2>

//       {/* Diamond Carousel */}
//       <div className="relative w-full max-w-6xl mx-auto">
//         <div className="flex items-center justify-center relative h-80 md:h-96 overflow-hidden">
//           <motion.div
//             className="flex items-center absolute"
//             animate={{
//               x: -(currentIndex + centerOffset) * 250 + 250 * 2, // Center the current diamond
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 30,
//               duration: 0.8,
//             }}
//             style={{
//               width: `${extendedDiamonds.length * 250}px`,
//             }}
//           >
//             {extendedDiamonds.map((diamond, index) => {
//               const actualIndex = index % diamonds.length
//               const isCenter = index === currentIndex + centerOffset
//               const distanceFromCenter = Math.abs(index - (currentIndex + centerOffset))

//               return (
//                 <motion.div
//                   key={`${actualIndex}-${Math.floor(index / diamonds.length)}`}
//                   className="flex flex-col items-center justify-center"
//                   style={{ width: "250px", minWidth: "250px" }}
//                   animate={{
//                     scale: isCenter ? 1.2 : distanceFromCenter === 1 ? 0.9 : 0.7,
//                     opacity: distanceFromCenter > 2 ? 0.3 : isCenter ? 1 : 0.7,
//                     y: isCenter ? -10 : distanceFromCenter === 1 ? 5 : 10,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {/* Diamond Image */}
//                   <motion.div
//                     className="relative mb-4"
//                     whileHover={{
//                       scale: isCenter ? 1.05 : 0.95,
//                       rotate: isCenter ? [0, -2, 2, 0] : 0,
//                     }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                   >
//                     <img
//                       src={diamond.image || "/placeholder.svg"}
//                       alt={`${diamond.name} diamond`}
//                       width={isCenter ? 200 : 150}
//                       height={isCenter ? 200 : 150}
//                       className="object-contain drop-shadow-lg"
//                       priority={isCenter}
//                     />
//                     {/* <Image
//                       src={diamond.image || "/placeholder.svg"}
//                       alt={`${diamond.name} diamond`}
//                       width={isCenter ? 200 : 150}
//                       height={isCenter ? 200 : 150}
//                       className="object-contain drop-shadow-lg"
//                       priority={isCenter}
//                     /> */}

                    
//                   </motion.div>

//                   {/* Diamond Name */}
//                   <motion.p
//                     className={`font-serif text-stone-600 ${isCenter ? "text-xl md:text-2xl font-medium" : "text-lg"}`}
//                     animate={{
//                       opacity: isCenter ? 1 : 0.6,
//                       scale: isCenter ? 1 : 0.9,
//                     }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     {diamond.name}
//                   </motion.p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>

//         {/* Navigation Arrows */}
//         <motion.button
//           onClick={prevDiamond}
//           className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-500 hover:bg-stone-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </motion.button>

//         <motion.button
//           onClick={nextDiamond}
//           className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-500 hover:bg-stone-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </motion.button>
//       </div>

//       {/* Current Diamond Button */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           className="mt-12"
//           key={diamonds[currentIndex].name}
//           initial={{ opacity: 0, y: 20, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: -20, scale: 0.9 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           <button className="px-8 py-3 border-2 border-stone-400 text-stone-600 font-serif text-lg hover:bg-stone-200 transition-colors duration-300 rounded-sm">
//             {diamonds[currentIndex].name}
//           </button>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots Indicator */}
//       <div className="flex space-x-2 mt-8">
//         {diamonds.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => goToDiamond(index)}
//             className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//               index === currentIndex ? "bg-stone-600" : "bg-stone-300"
//             }`}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             animate={{ scale: index === currentIndex ? 1.2 : 1 }}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const diamonds = [
  {
    name: "HEART",
    image: "https://static.vecteezy.com/system/resources/previews/044/570/849/large_2x/sparkling-cut-diamond-illustration-with-transparent-background-png.png",
    shape: "heart",
  },
  {
    name: "PEAR",
    image: "https://static.vecteezy.com/system/resources/previews/044/570/849/large_2x/sparkling-cut-diamond-illustration-with-transparent-background-png.png",
    shape: "pear",
  },
  {
    name: "ROUND",
    image: "https://static.vecteezy.com/system/resources/previews/044/570/849/large_2x/sparkling-cut-diamond-illustration-with-transparent-background-png.png",
    shape: "round",
  },
  {
    name: "OVAL",
    image: "https://static.vecteezy.com/system/resources/previews/044/570/849/large_2x/sparkling-cut-diamond-illustration-with-transparent-background-png.png",
    shape: "oval",
  },
  {
    name: "MARQUISE",
    image: "https://static.vecteezy.com/system/resources/previews/044/570/849/large_2x/sparkling-cut-diamond-illustration-with-transparent-background-png.png",
    shape: "marquise",
  },
]

export default function DiamondCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with ROUND in center

  const nextDiamond = () => {
    setCurrentIndex((prev) => (prev + 1) % diamonds.length)
  }

  const prevDiamond = () => {
    setCurrentIndex((prev) => (prev - 1 + diamonds.length) % diamonds.length)
  }

  const getVisibleDiamonds = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + diamonds.length) % diamonds.length
      visible.push({
        ...diamonds[index],
        position: i,
        isCenter: i === 0,
      })
    }
    return visible
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Title */}
      <motion.h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-600 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SHOP DIAMONDS
      </motion.h2>

      {/* Diamond Carousel */}
      <div className="relative w-full max-w-7xl mx-auto bg-white p-10 rounded-4xl">
        <div className="flex items-center justify-center relative h-80 md:h-96">
          {getVisibleDiamonds().map((diamond, index) => (
            <motion.div
              key={`${diamond.name}-${currentIndex}`}
              className="absolute flex flex-col items-center"
              initial={{
                x: diamond.position * 200,
                scale: diamond.isCenter ? 1.2 : 0.8,
                opacity: Math.abs(diamond.position) > 2 ? 0 : 1,
              }}
              animate={{
                x: diamond.position * 250,
                scale: diamond.isCenter ? 1.2 : 0.8,
                opacity: Math.abs(diamond.position) > 2 ? 0 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {/* Diamond Image */}
              <motion.div
                className="relative mb-4"
                whileHover={{ scale: diamond.isCenter ? 1.05 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={diamond.image || "/placeholder.svg"}
                  alt={`${diamond.name} diamond`}
                  width={diamond.isCenter ? 300 : 150}
                  height={diamond.isCenter ? 300 : 150}
                  className="object-contain drop-shadow-lg"
                />
                {/* <Image
                  src={diamond.image || "/placeholder.svg"}
                  alt={`${diamond.name} diamond`}
                  width={diamond.isCenter ? 300 : 150}
                  height={diamond.isCenter ? 300 : 150}
                  className="object-contain drop-shadow-lg"
                /> */}
              </motion.div>

              {/* Diamond Name */}
              <motion.p
                className={`font-serif text-stone-600 ${
                  diamond.isCenter ? "text-xl md:text-2xl font-medium" : "text-lg"
                }`}
                animate={{
                  opacity: diamond.isCenter ? 1 : 0.7,
                  scale: diamond.isCenter ? 1 : 0.9,
                }}
              >
                {diamond.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevDiamond}
          className="absolute left-4 md:left-96 botoom-0 -translate-y-1/2 w-12 h-12 bg-stone-500 hover:bg-stone-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextDiamond}
          className="absolute right-4 md:right-96 botoom-0 -translate-y-1/2 w-12 h-12 bg-stone-500 hover:bg-stone-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex flex-col justify-center items-center">
            {/* Current Diamond Button */}
      <motion.div
        className="mt-12 "
        key={diamonds[currentIndex].name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button className="px-8 py-3 border-2 border-stone-400 text-stone-600 font-serif text-lg hover:bg-stone-200 transition-colors duration-300 rounded-sm">
          {diamonds[currentIndex].name}
        </button>
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-8">
        {diamonds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-stone-600" : "bg-stone-300"
            }`}
          />
        ))}
      </div>
        </div>
      </div>

      
    </section>
  )
}
