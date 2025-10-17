"use client";
import Link from 'next/link';
import { FiSearch, FiPenTool, FiCode, FiCheckCircle } from 'react-icons/fi';

const HowWeWorkSection = () => {
  const workProcess = [
    {
      step: "01",
      icon: FiSearch,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and technical requirements through comprehensive consultation and market analysis."
    },
    {
      step: "02",
      icon: FiPenTool,
      title: "Design & Planning",
      description: "Our team creates detailed project blueprints, user experience designs, and technical specifications that align with your vision and objectives."
    },
    {
      step: "03",
      icon: FiCode,
      title: "Development & Testing",
      description: "Using latest technologies and best practices, we build robust solutions while conducting rigorous testing to ensure quality and performance."
    },
    {
      step: "04",
      icon: FiCheckCircle,
      title: "Launch & Support",
      description: "We handle deployment, provide training, and offer ongoing support to ensure your solution continues to deliver value long after launch."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-6">
            Our Proven <span className="text-[#f46036]">Development Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Navexis, we follow a systematic approach that ensures every project delivers exceptional results. Our process combines agile methodology with deep client collaboration to create solutions that truly transform your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workProcess.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <div key={index} className="text-center group relative">
                {/* Step Number Background */}
                <div className="text-8xl font-bold text-gray-200 mb-4 select-none opacity-50">
                  {process.step}
                </div>

                {/* Icon */}
                <div className="relative -mt-16 mb-8">
                  <div className="w-20 h-20 bg-white border-4 border-[#f46036] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-[#f46036]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>

                {/* Connecting Arrow (except for last item) */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-32 left-full w-8 h-0.5 bg-[#f46036] transform -translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#f46036] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience our proven process firsthand?
          </p>
          <Link
            href="/contact"
            className="bg-[#f46036] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e55530] transition-all duration-300 hover:shadow-lg inline-flex items-center"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;