import { FC } from 'react';

const CTASection: FC = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
            {/* Background Decorative Curved Shapes */}
            <div className="absolute inset-0">
                {/* Top Left Curve */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-purple-500/40 to-transparent transform -skew-y-3 origin-top-left"></div>

                {/* Bottom Right Curve */}
                <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-indigo-900/50 to-transparent transform skew-y-3 origin-bottom-right"></div>

                {/* Floating Circles */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Build Your SaaS Empire?
                </h2>

                <p className="text-white text-lg lg:text-xl mb-12 font-light leading-relaxed">
                    Transform your business idea into a recurring revenue powerhouse. Let's create a scalable SaaS platform that grows with your ambitions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-12 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/30 text-lg hover:scale-105">
                        Start Your SaaS Journey
                    </button>

                    <button className="border-2 border-white text-white font-semibold px-12 py-5 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-600 text-lg">
                        Schedule a Demo
                    </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/90">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm">15+ SaaS Platforms Built</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">99.9% Uptime Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm">Enterprise Security</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
