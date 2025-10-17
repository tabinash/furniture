import Image from 'next/image';
import { FC } from 'react';
import laptop from "../../../assets/image copy 2.png"

const HeroSection: FC = () => {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-12 md:py-16 lg:py-0">
            {/* Blue Circle in Top Right Corner */}
            <div className="absolute hidden sm:block top-[-100px] md:top-[-150px] lg:top-[-200px] right-0 md:right-8 lg:right-12 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] bg-[#1748c5] rounded-full transform translate-x-1/4 md:translate-x-1/3 -translate-y-1/4 md:-translate-y-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-8 max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight">
                            Affordable Website{' '}
                            <span className="text-blue-600">
                                Design & Development
                            </span>{' '}
                            in Nepal
                        </h1>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                            We owe who we are today to our team of creative designers,
                            dedicated scrum masters, and the best web developers in Nepal. For
                            years, they have explored and implemented all the domains of tools
                            and technologies related to their respective fields. This dedication and
                            skill set make us a top choice among web development agencies in
                            Nepal. It also solidifies our reputation as the best in Nepal's website
                            development landscape.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg w-full sm:w-auto">
                            Book your free consultation
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
                        {/* Laptop Image */}
                        <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-2xl">
                            <Image
                                src={laptop}
                                alt="Website Design Preview on iMac"
                                width={500}
                                height={550}
                                className="drop-shadow-2xl w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;