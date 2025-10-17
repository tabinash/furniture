'use client';

const OurStorySection = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Content - Static Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop&auto=format"
                                alt="Modern office building with glass facade"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content - Story Text */}
                    <div className="space-y-6 lg:pl-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                            Our Story
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                            <p className="text-justify">
                                InfoDevelopers Private Limited has established itself as a pioneering
                                financial technology solutions provider in Nepal. InfoDevelopers is a
                                software development and IT Consultancy Company which has become a leader
                                in the development, implementation and support of innovative solutions.
                            </p>

                            <p className="text-justify">
                                Since 2002, InfoDevelopers has collaborated with the Government of Nepal
                                to develop and execute numerous digital initiatives aimed at providing
                                G2B and G2C services. The company is led by professionals with profound
                                experience in the domains of banking and financial automation.
                            </p>

                            <p className="text-justify">
                                InfoDevelopers excels in developing a wide range of products and services,
                                including core banking eco-system, mobile applications, office automation
                                solutions, artificial intelligence capabilities, customized solutions,
                                and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
