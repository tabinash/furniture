import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedCollection() {
  const products = [
    {
      id: 1,
      name: "Ceramic Table Lamp",
      price: 4500,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Wall Art Set",
      price: 6200,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 3,
      name: "Designer Accent Chair",
      price: 16800,
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 4,
      name: "Velvet Lounge Chair",
      price: 19500,
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=400&fit=crop",
      rating: 4
    }
  ];

  const categories = ["ALL", "CHAIRS", "DECOR", "LIGHTING", "TABLES", "STORAGE"];

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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-normal mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-gray-900">Featured </span>
              <span className="text-amber-600">Collection</span>
            </h2>
            <p 
              className="text-gray-600 text-sm max-w-3xl mx-auto font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Handpicked pieces that define elegance and functionality — each item crafted to elevate your living space.
            </p>
          </div>

          {/* Category Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`font-semibold text-sm transition-colors ${
                  category === "ALL" 
                    ? "text-amber-600 border-b-2 border-amber-600" 
                    : "text-gray-700 hover:text-amber-600"
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Products Grid with Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-gray-900 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Product Image Card */}
                  <div className="relative overflow-hidden rounded-3xl h-[300px] shadow-md hover:shadow-xl transition-shadow">
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
                          className="text-white text-xl font-semibold mb-2"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {product.name}
                        </h3>
                        <p 
                          className="text-amber-400 text-base font-semibold"
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

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-gray-900 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}