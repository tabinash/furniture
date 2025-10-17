import { FaSyncAlt, FaTruck, FaCreditCard, FaHeadset } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0 min-h-screen bg-white">
        {/* Left Section - Main Hero */}
        <div className="relative bg-gray-50 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&h=900&fit=crop"
            alt="Luxury brown leather sofa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col justify-end px-12 lg:px-20 py-20 h-full">
            <p 
              className="text-gray-700 text-xs font-semibold mb-4 tracking-wide"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              PREMIUM COLLECTION 2025
            </p>
            <h1 
              className="text-4xl md:text-5xl font-normal text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Transform Your<br />
              <span className="text-amber-600">Living Space</span>
            </h1>
            <p 
              className="text-gray-700 text-sm mb-8 max-w-lg leading-relaxed font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Discover handcrafted furniture that brings comfort, style, and elegance to every corner of your home.
            </p>
            <div>
              <button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Promotional Sale */}
        <div className="relative bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&h=900&fit=crop"
            alt="Modern gray sofa collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/60 to-transparent" />
          
          <div className="relative z-10 flex flex-col justify-center items-center px-8 lg:px-12 py-20 h-full text-center">
            <h2 
              className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-amber-600">GRAND OPENING</span><br />
              SALE
            </h2>
            <p 
              className="text-gray-900 text-sm font-semibold mb-1"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              EXCLUSIVE DESIGNS
            </p>
            <p 
              className="text-gray-900 text-sm font-semibold mb-6"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              UNBEATABLE PRICES
            </p>
            <p 
              className="text-amber-600 text-base font-semibold mb-8"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              UP TO 40% OFF
            </p>
            <div>
              <button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                SHOP SALE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Features Section */}
      <div className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* 30 Days Return */}
          <div className="flex flex-col items-center">
            <FaSyncAlt className="text-amber-500 text-3xl mb-3" />
            <h3 
              className="font-semibold text-gray-900 text-base mb-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              30 Days Return
            </h3>
            <p 
              className="text-gray-600 text-xs font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Easy returns within 30 days of purchase
            </p>
          </div>
          
          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-amber-500 text-3xl mb-3" />
            <h3 
              className="font-semibold text-gray-900 text-base mb-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Free Delivery
            </h3>
            <p 
              className="text-gray-600 text-xs font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Within Kathmandu Valley on orders over NPR 50,000
            </p>
          </div>
          
          {/* Payment Security */}
          <div className="flex flex-col items-center">
            <FaCreditCard className="text-amber-500 text-3xl mb-3" />
            <h3 
              className="font-semibold text-gray-900 text-base mb-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Secure Payment
            </h3>
            <p 
              className="text-gray-600 text-xs font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Multiple payment options for your convenience
            </p>
          </div>
          
          {/* Support 24/24 */}
          <div className="flex flex-col items-center">
            <FaHeadset className="text-amber-500 text-3xl mb-3" />
            <h3 
              className="font-semibold text-gray-900 text-base mb-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Expert Support
            </h3>
            <p 
              className="text-gray-600 text-xs font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Our team is ready to help you find the perfect piece
            </p>
          </div>
        </div>
      </div>
    </>
  );
}