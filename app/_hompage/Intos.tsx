"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const products: Product[] = [
    {
      id: 1,
      name: 'Modern Dining Chair',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop',
      category: 'CHAIR',
      rating: 5
    },
    {
      id: 2,
      name: 'Velvet Accent Chair',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=800&fit=crop',
      category: 'CHAIR',
      rating: 4
    },
    {
      id: 3,
      name: 'Scandinavian Lounge Chair',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop',
      category: 'CHAIR',
      rating: 5
    },
    {
      id: 4,
      name: 'Luxury Armchair',
      price: 18500,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop',
      category: 'CHAIR',
      rating: 4
    }
  ];

  const filters = ['ALL', 'CHAIR', 'SOFA', 'TABLE', 'DECOR'];

  const filteredProducts = activeFilter === 'ALL' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-normal mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-gray-900">New </span>
              <span className="text-amber-600">Arrivals</span>
            </h2>
            <p 
              className="text-gray-600 text-sm max-w-3xl mx-auto font-light"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Discover our latest collection of handcrafted furniture pieces, designed to bring elegance and comfort to your home.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-semibold transition-all text-sm ${
                  activeFilter === filter
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid with Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-gray-900 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  {/* Product Image Card */}
                  <div className="relative overflow-hidden rounded-3xl h-[300px] mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    {/* Soft gradient overlay - only at bottom */}
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
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-gray-900 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}