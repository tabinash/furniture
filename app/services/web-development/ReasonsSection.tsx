import { FC } from 'react';
import Link from 'next/link';

const ReasonsSection: FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content - Heading with Background */}
                    <div className="bg-blue-50 p-12 lg:p-16 rounded-2xl">
                        <h2 className="text-4xl  font-normal text-gray-900 leading-tight">
                            There are Reasons to Choose E-Signature, Among the{' '}
                            <span className="text-blue-600">Top Web Development</span>{' '}
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
                            At E-Signature, we don't just build websites; we create digital
                            experiences tailored to your business needs. Whether you need a
                            cool online shop, a place to show your products or services, or a
                            simple welcome page, we've shown people worldwide that we're
                            good at this. Our expert website makers ensure that your website
                            solves your business problems and helps you with your online
                            advertising. When you choose E-Signature, you're picking the best
                            website or{' '}
                            <Link href="#" className="text-blue-600 hover:underline">
                                app design and development
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