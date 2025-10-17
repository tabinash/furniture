import { Heart } from 'lucide-react';

export default function TrendingAndBestsellers() {
  const trendingProducts = [
    {
      id: 1,
      name: "Minimalist Side Table",
      price: 7800,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Modern Floor Lamp",
      price: 5200,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 3,
      name: "Scandinavian Dining Chair",
      price: 9500,
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=400&fit=crop",
      rating: 5
    }
  ];

  const bestsellerProducts = [
    {
      id: 1,
      name: "Velvet Accent Chair",
      price: 18500,
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Classic Leather Sofa",
      price: 52000,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Designer Coffee Table",
      price: 14800,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      rating: 4
    }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
            {/* Left Side - Vertical Banner */}
            <div className="relative rounded-3xl overflow-hidden lg:row-span-2 min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=1000&fit=crop"
                alt="Wicker chair with plants"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-transparent" />
              
              <div className="relative z-10 flex flex-col justify-start items-center p-8">
                <div className="text-center mt-4">
                  <h3 
                    className="text-gray-900 text-xl font-semibold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Clearance Sale
                  </h3>
                  <p 
                    className="text-gray-600 text-xs font-semibold mb-4 tracking-wide"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    LAST CHANCE
                  </p>
                  <p 
                    className="text-amber-600 text-4xl font-normal mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Up to 60%
                  </p>
                  <p 
                    className="text-gray-900 font-semibold text-sm mb-6"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    ON SELECT ITEMS
                  </p>
                  <button 
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Shop Clearance
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Products */}
            <div>
              {/* Trending Products Section */}
              <div className="mb-16">
                <h2 
                  className="text-4xl font-normal mb-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="text-gray-900">Trending </span>
                  <span className="text-amber-600">Now</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {trendingProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-3xl h-[300px]">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          {/* Top Icons */}
                          <div className="flex justify-between items-start">
                            {/* Star Rating */}
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  className={`w-4 h-4 ${index < product.rating ? 'fill-yellow-400' : 'fill-white/30'}`}
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                            
                            {/* Heart Icon */}
                            <button className="text-white hover:text-red-500 transition-colors">
                              <Heart className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Bottom Content */}
                          <div>
                            <h3 
                              className="text-white text-base font-semibold mb-1"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {product.name}
                            </h3>
                            <p 
                              className="text-amber-400 text-sm font-semibold"
                              style={{ fontFamily: 'Nunito, sans-serif' }}
                            >
                              NPR {product.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bestsellers Section */}
              <div>
                <h2 
                  className="text-4xl font-normal mb-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="text-gray-900">Customer </span>
                  <span className="text-amber-600">Favorites</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {bestsellerProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-3xl h-[300px]">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          {/* Top Icons */}
                          <div className="flex justify-between items-start">
                            {/* Star Rating */}
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  className={`w-4 h-4 ${index < product.rating ? 'fill-yellow-400' : 'fill-white/30'}`}
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                            
                            {/* Heart Icon */}
                            <button className="text-white hover:text-red-500 transition-colors">
                              <Heart className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Bottom Content */}
                          <div>
                            <h3 
                              className="text-white text-base font-semibold mb-1"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {product.name}
                            </h3>
                            <p 
                              className="text-amber-400 text-sm font-semibold"
                              style={{ fontFamily: 'Nunito, sans-serif' }}
                            >
                              NPR {product.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}