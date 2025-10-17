import { ArrowRight, Phone, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&q=80&auto=format&fit=crop"
            alt="Modern luxury living room"
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient - Light version */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
            {/* Left side - CTA content */}
            <div className="flex flex-col justify-center">
              {/* Heading */}
              <h1
                className="text-4xl font-normal leading-tight mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="text-gray-900">Transform Your Home Into </span>
                <span className="text-amber-600">Something Extraordinary</span>
              </h1>

              {/* Description */}
              <p
                className="text-gray-700 text-sm font-semibold leading-relaxed mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Your dream space is closer than you think. From the first sketch to 
                the final piece, we craft furniture that tells your story — 
                one room, one design, one masterpiece at a time.
              </p>

              {/* Value Props - Quick bullets */}
              <div className="mb-8 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 text-xs font-medium" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Free design consultation & 3D visualization
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 text-xs font-medium" style={{ fontFamily: "Nunito, sans-serif" }}>
                    White glove delivery & installation service
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 text-xs font-medium" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Lifetime warranty & hassle-free returns
                  </p>
                </div>
              </div>

              {/* Primary & Secondary CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  className="group bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Options */}
                <div className="flex gap-3">
                  <a
                    href="tel:+9779801234567"
                    className="flex-1 bg-gray-900/10 hover:bg-gray-900/20 border border-gray-900/20 text-gray-900 font-semibold text-xs px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href="mailto:info@luxoraliving.com"
                    className="flex-1 bg-gray-900/10 hover:bg-gray-900/20 border border-gray-900/20 text-gray-900 font-semibold text-xs px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <p
                className="text-gray-600 text-xs mt-4 text-center"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                ✓ Trusted by 2,000+ customers • Premium quality guaranteed
              </p>
            </div>

            {/* Right side - reserved for background subject */}
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;