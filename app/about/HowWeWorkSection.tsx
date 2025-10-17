'use client';

import Image from 'next/image';
import workimage from "../../assets/howwework.svg"

const HowWeWorkSection = () => {
    return (
        <section className="py-16 lg:py-24 ">
            <div className="container px-6 lg:px-20">

                {/* Header - Left Aligned */}
                <div className="mb-12">
                    <h2 className="text-4xl font-medium text-blue-600 mb-6">
                        How We Work
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                        At InfoDevelopers, we continuously work to ensure that our services are
                        maintained at the highest possible level of reliability and satisfaction.
                    </p>
                </div>

                {/* SVG Workflow Diagram */}
                <div className="flex justify-center">
                    <div className="bg-white p-8">
                        <Image
                            src={workimage}
                            alt="How We Work - Workflow Diagram"
                            width={900}
                            height={600}
                            className="w-full max-w-5xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;