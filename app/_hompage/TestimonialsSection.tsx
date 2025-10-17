import { Star } from 'lucide-react';

export default function SpotlightAndBlog() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
      author: "Sphiron Team",
      date: "15 October, 2025",
      title: "5 Tips to Choose the Perfect Sofa",
      excerpt: "Discover how to select a sofa that combines comfort, style, and durability for your living space. Our experts share insider tips..."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
      author: "Sphiron Team",
      date: "12 October, 2025",
      title: "Small Space Living: Maximize Your Home",
      excerpt: "Learn clever furniture arrangement ideas and multi-functional pieces that make small apartments feel spacious and stylish..."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop",
      author: "Sphiron Team",
      date: "8 October, 2025",
      title: "Trending Interior Colors for 2025",
      excerpt: "Explore this season's hottest color palettes and how to incorporate them into your home with the right furniture choices..."
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

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Product Spotlight Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Premium Scandinavian Sofa"
                className="w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h2 
                className="text-4xl font-normal text-gray-900 mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Scandinavian <span className="text-amber-600">3-Seater Sofa</span>
              </h2>
              
              {/* Price and Rating */}
              <div className="flex items-center gap-4 mb-6">
                <p 
                  className="text-2xl font-semibold text-amber-600"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  NPR 45,000
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-gray-600 text-sm leading-relaxed mb-8 font-light"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Experience ultimate comfort with our bestselling Scandinavian sofa. Crafted with premium fabrics and solid wood frame, this timeless piece features plush cushioning and elegant design that complements any living room. Perfect for families and entertaining guests.
              </p>

              <button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-sm w-fit"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                VIEW DETAILS
              </button>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div>
            {/* Blog Header */}
            <div className="text-center mb-12">
              <h2 
                className="text-4xl font-normal mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <span className="text-gray-900">From Our </span>
                <span className="text-amber-600">Blog</span>
              </h2>
              <p 
                className="text-gray-600 text-sm font-light"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Expert tips, design inspiration, and furniture care guides to help you create your dream home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group cursor-pointer"
                >
                  {/* Blog Image */}
                  <div className="relative aspect-video overflow-hidden rounded-3xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Blog Content */}
                  <div>
                    {/* Meta Info */}
                    <div 
                      className="flex items-center gap-2 text-xs mb-3"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      <span className="text-gray-600">By</span>
                      <span className="text-amber-600 font-semibold">{post.author}</span>
                      <span className="text-gray-600">• {post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="text-gray-600 text-sm leading-relaxed font-light"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}