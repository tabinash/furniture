import { FaUserPlus, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header className="w-full">
        {/* Top Bar */}
        <div 
          className="bg-amber-600 text-white text-center py-2 text-xs font-semibold tracking-wide"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          FREE SHIPPING ON ORDERS ABOVE NPR 50,000 • SHOP NOW
        </div>

        {/* Main Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7l9 6 9-6M3 17l9 6 9-6"
                  />
                </svg>
              </div>
              <span 
                className="text-gray-900 font-normal text-xl tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Luxora Living
              </span>
            </div>

            {/* Navigation Links */}
            <nav 
              className="hidden md:flex gap-8 items-center font-semibold text-gray-700 text-sm"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">Home</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Products</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Categories</a>
              <a href="#" className="hover:text-amber-600 transition-colors">About</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Contact</a>
            </nav>

            {/* Icons */}
            <div className="flex gap-6 items-center text-gray-700">
              <button className="hover:text-amber-600 transition-colors" aria-label="Account">
                <FaUserPlus className="text-lg" />
              </button>
              <button className="hover:text-amber-600 transition-colors" aria-label="Search">
                <FaSearch className="text-lg" />
              </button>
              <button className="hover:text-amber-600 transition-colors" aria-label="Wishlist">
                <FaHeart className="text-lg" />
              </button>
              <button className="hover:text-amber-600 transition-colors relative" aria-label="Cart">
                <FaShoppingBag className="text-lg" />
                <span 
                  className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}