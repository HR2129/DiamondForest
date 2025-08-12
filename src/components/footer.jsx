import Link from "next/link"

export function Footer() {
  return (
 
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/story" className="hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-gray-900">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/sourcing" className="hover:text-gray-900">
                  Responsible Sourcing
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-gray-900">
                  Sustainability Goals
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-gray-900">
                  Our Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Orders */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">ORDERS</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/track" className="hover:text-gray-900">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gray-900">
                  Free 30 Day Returns
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-gray-900">
                  Free Shipping
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-gray-900">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers at Forest
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-gray-900">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-gray-900">
                  Jewelry Financing
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="hover:text-gray-900">
                  Lifetime Diamond Upgrade
                </Link>
              </li>
              <li>
                <Link href="/promo" className="hover:text-gray-900">
                  Promo Codes & Offers
                </Link>
              </li>
              <li>
                <Link href="/refer" className="hover:text-gray-900">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-gray-900">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">EDUCATION</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/4cs" className="hover:text-gray-900">
                  4 C's of Diamond Guide
                </Link>
              </li>
              <li>
                <Link href="/lab-grown" className="hover:text-gray-900">
                  Lab Grown Diamond Guide
                </Link>
              </li>
              <li>
                <Link href="/moissanite" className="hover:text-gray-900">
                  Moissanite vs. Diamond Guide
                </Link>
              </li>
              <li>
                <Link href="/ring-sizer" className="hover:text-gray-900">
                  Free Ring Sizer + Ring Size Chart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">© 2025 DiamondForest.com</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link href="/terms" className="hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-gray-900">
              Site Map
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">FOLLOW US</p>
        </div>
      </footer>
    
  )
}
