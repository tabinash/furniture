import { FC } from 'react';
import Link from 'next/link';

const ReasonsSection: FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content - Heading with Background */}
                    <div className="bg-blue-50 p-12 lg:p-16 rounded-2xl">
                        <h2 className="text-4xl  font-normal text-gray-900 leading-tight">
                            There are Reasons to Choose E-Signature, Among the{' '}
                            <span className="text-blue-600">Top Mobile App Development</span>{' '}
                            Companies in Nepal
                        </h2>
                    </div>

                    {/* Right Content - Description Text */}
                    <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
                        <p>
                            We go beyond the traditional approach and look to satisfy your
                            audience and goals more than just satisfying you.
                        </p>

                        <p>
                            At E-Signature, we don't just build mobile apps; we create innovative
                            mobile experiences tailored to your business needs. Whether you need a
                            native Android app, iOS application, or cross-platform solution, we've shown
                            people worldwide that we're experts at this. Our skilled mobile app developers
                            ensure that your app solves your business problems and provides exceptional
                            user experiences on both Android and iOS platforms. When you choose E-Signature,
                            you're picking the best{' '}
                            <Link href="#" className="text-blue-600 hover:underline">
                                mobile app design and development
                            </Link>{' '}
                            team that understands what businesses need in Nepal and worldwide.
                        </p>

                        <p>
                            Just don't take our words - our proven record says it all. We have
                            served businesses of all kinds with their kind of challenges and
                            objectives. Check out{' '}
                            <Link href="#" className="text-blue-600 hover:underline">
                                our portfolio
                            </Link>{' '}
                            to check our past projects and their stories.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;