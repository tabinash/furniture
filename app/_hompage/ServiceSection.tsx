export default function CategoryShowcase() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            
            {/* Top Left - Chair Category Card */}
            <div className="bg-amber-50 rounded-3xl p-8 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="w-full flex justify-center mb-6">
                <div className="bg-white rounded-3xl p-6 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop"
                    alt="Modern accent chair"
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 
                  className="text-amber-600 text-2xl font-normal mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Chairs
                </h2>
                <p 
                  className="text-gray-700 font-semibold text-xs mb-1 tracking-wide"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  TRENDING NOW
                </p>
                <p 
                  className="text-gray-900 text-base font-semibold"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  50+ Styles
                </p>
              </div>
            </div>

            {/* Top Middle - Living Room Scene */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Stylish wall shelves with decorative items"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Decor & Storage
                </h3>
              </div>
            </div>

            {/* Top Right & spans to bottom - Flash Sale Card */}
            <div className="relative rounded-3xl overflow-hidden lg:row-span-2 min-h-[500px] group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=1000&fit=crop"
                alt="Wicker chair collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
              
              <div className="relative z-10 flex flex-col justify-start items-center p-8">
                <div className="text-center mt-4">
                  <h3 
                    className="text-gray-900 text-xl font-semibold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Flash Sale Today
                  </h3>
                  <p 
                    className="text-gray-600 text-xs font-semibold mb-4 tracking-wide"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    LIMITED TIME OFFER
                  </p>
                  <p 
                    className="text-amber-600 text-4xl font-normal mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    30% - 50%
                  </p>
                  <p 
                    className="text-gray-900 font-semibold text-sm"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    ON SELECT ITEMS
                  </p>
                  <button 
                    className="mt-6 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Shop Sale
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Left - Large Sofa Banner */}
            <div className="relative rounded-3xl overflow-hidden md:col-span-2 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=400&fit=crop"
                alt="Luxury gray sofa with decorative pillows"
                className="w-full h-full object-cover min-h-[250px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8">
                <h3 
                  className="text-white text-2xl font-normal mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Luxury <span className="text-amber-400">Sofas</span>
                </h3>
                <p 
                  className="text-white/90 text-sm font-light"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Experience unmatched comfort and style
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}