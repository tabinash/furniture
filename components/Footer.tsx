"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = ["About Us", "Our Products", "Careers", "Contact", "FAQs"];
  const galleryImages = [
    "https://images.unsplash.com/photo-1616627988854-5bc510a7fa07?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582582429615-900a6a0f64c1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1598300056391-4b90b2c2e1b2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
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

      <footer className="bg-neutral-900 text-gray-300 pt-20 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upper Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Identity */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="white"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7l9 6 9-6M3 17l9 6 9-6"
                    />
                  </svg>
                </div>
                <span 
                  className="text-2xl font-normal text-white tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Luxora Living
                </span>
              </div>
              <p 
                className="text-xs leading-relaxed text-gray-400 mb-6 font-light"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Discover furniture that blends artistry with comfort. Designed to
                elevate your space and crafted for the modern lifestyle.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-amber-500 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-amber-500 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-amber-500 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-amber-500 transition-colors"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 
                className="text-base font-semibold text-white mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-xs hover:text-amber-400 transition-colors font-light"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 
                className="text-base font-semibold text-white mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Contact Us
              </h3>
              <ul 
                className="space-y-3 text-xs font-light"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                  <span>+977 980-1234567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                  <span>support@luxoraliving.com</span>
                </li>
                <li className="text-gray-400 mt-3">
                  Bhaisepati, Lalitpur<br />
                  Kathmandu, Nepal
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h3 
                className="text-base font-semibold text-white mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Gallery
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-800 mb-8"></div>

          {/* Bottom Bar */}
          <div 
            className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-light"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <p>
              © {new Date().getFullYear()} Luxora Living. All Rights Reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;