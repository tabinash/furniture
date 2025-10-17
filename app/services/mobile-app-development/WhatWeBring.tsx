import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

const WhatWeBring: FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Heading */}
                <h2 className="text-4xl font-normal text-center text-gray-900 mb-16">
                    What <span className="text-blue-600">We Bring</span> To The Table?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Team with Experience and Expertise
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We have been in this field since 2008. Our seasoned mobile app developers have experience in building native Android, iOS, and cross-platform applications
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Proven Track Record
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Our track record speaks for itself. We have about 27% of recurring{' '}
                            <span className="text-blue-600">and</span> recommended customers,
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Exceptional Customer Service
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We are working for our customers, so it only makes sense to develop mobile apps that truly serve your business goals on both Android and iOS platforms
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 4 */}
                    <div className="text-center space-y-4">


                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Brand Alignment
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Whether you are an established business or just started, E-Signature's team of UI/UX
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBring;