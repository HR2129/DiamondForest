// import Link from "next/link"
// import { Search, ShoppingBag, User, Heart } from "lucide-react"


// export function Header() {
//   return (
//     <header className="w-full bg-center bg-cover"  >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top row with search, logo, and icons */}
//         <div className="flex items-center justify-between h-20 py-4">
//           {/* Search Bar */}
//           <div className="flex items-center bg-stone-600 rounded-full px-4 py-2 w-48">
//             <Search className="h-4 w-4 text-white mr-2" />
//             <span className="text-white text-sm font-medium">SEARCH</span>
//           </div>

//           {/* Logo */}
//           <Link href="/" className="text-3xl font-serif text-stone-700 tracking-wider">
//             DIAMOND FOREST
//           </Link>

//           {/* Action Icons */}
//           <div className="flex items-center space-x-4">
//             <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
//               <User className="h-6 w-6" />
//             </button>
//             <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
//               <Heart className="h-6 w-6" />
//             </button>
//             <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
//               <ShoppingBag className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="flex items-center justify-center space-x-12 pb-4">
//           <Link href="/diamonds" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             DIAMONDS
//           </Link>
//           <Link href="/engagement" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             ENGAGEMENT
//           </Link>
//           <Link href="/wedding" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             WEDDING
//           </Link>
//           <Link href="/jewelry" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             JEWELRY
//           </Link>
//           <Link href="/custom" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             CUSTOM
//           </Link>
//           <Link href="/collections" className="text-stone-600 cursor-pointer hover:text-stone-800 font-medium text-sm tracking-wide">
//             COLLECTIONS
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

import Link from "next/link"
import { Search, ShoppingBag, User, Heart } from "lucide-react"

export function Header() {
  return (
    <header className="w-full ">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Top row with search, logo, and icons */}
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 py-4">
          {/* Search Bar */}
          <div className="relative flex items-center bg-stone-600 rounded-full px-4 py-2 w-48">
            <Search className="h-4 w-4 text-white mr-2" />
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent text-white placeholder-white text-sm font-medium outline-none border-none w-full"
            />
          </div>

          {/* Logo */}
          <Link href="/" className="text-3xl font-serif text-stone-700 tracking-wider">
            DIAMOND FOREST
          </Link>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
              <User className="h-6 w-6" />
            </button>
            <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
              <Heart className="h-6 w-6" />
            </button>
            <button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation Menu with borders */}
        <div className="border-t border-b border-stone-300 py-4">
          <nav className="flex items-center justify-center space-x-12">
            <Link href="/diamonds" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              DIAMONDS
            </Link>
            <Link href="/engagement" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              ENGAGEMENT
            </Link>
            <Link href="/wedding" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              WEDDING
            </Link>
            <Link href="/jewelry" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              JEWELRY
            </Link>
            <Link href="/custom" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              CUSTOM
            </Link>
            <Link href="/collections" className="text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide">
              COLLECTIONS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
