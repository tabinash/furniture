import Image from 'next/image';
import { FC } from 'react';
import laptop from "../../../assets/image copy 2.png"
const HeroSection: FC = () => {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 max-w-2xl">
                        <h1 className="text-5xl  font-normal text-gray-900 leading-tight">
                            Work with{' '}
                            <span className="text-blue-600">
                                Top Mobile App Development Company
                            </span>{' '}
                            in Nepal
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Looking for the best mobile app development company in Nepal? You've come to the right place! We're not just mobile app developers; but also innovators who bring your Android, iOS, or web app design ideas to life. Incorporating essential frameworks to advanced technologies like AI, Blockchain, or IoT, we make sure your applications are visually appealing, technologically robust, smart and adaptive.

                            Our expertise extends beyond app development to web design and development, providing seamless integration between your mobile apps and online presence. This holistic approach, combined with our innovative strategies in digital marketing and App/Play Store optimization, allows us to create applications that resonate with your audience and align perfectly with your business objectives.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                            Book your free consultation
                        </button>
                    </div>

                    {/* Right Image with Blue Circle Background */}
                    <div className="relative flex justify-center items-center lg:justify-end">
                        {/* Large Blue Circle Background */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] bg-blue-600 rounded-full -z-10 translate-x-32"></div>

                        {/* Laptop Image */}
                        <div className="relative z-10 w-full max-w-2xl">
                            <Image
                                src={laptop}
                                alt="Website Design Preview on iMac"
                                width={500}
                                height={550}
                                className=" drop-shadow-2xl"
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