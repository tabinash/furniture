import { FC } from 'react';
import Link from 'next/link';

const ReasonsSection: FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content - Heading with Background */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 lg:p-16 rounded-2xl">
                        <h2 className="text-4xl font-normal text-gray-900 leading-tight">
                            Why Choose E-Signature as Your{' '}
                            <span className="text-blue-600">SaaS Development Partner</span>{' '}
                            in Nepal
                        </h2>
                    </div>

                    {/* Right Content - Description Text */}
                    <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
                        <p>
                            We go beyond traditional software development by creating cloud-native SaaS platforms that scale automatically with your customer base and revenue growth.
                        </p>

                        <p>
                            At E-Signature, we don't just build software; we architect complete SaaS ecosystems tailored to your industry needs. Whether you need a multi-tenant CRM platform, an e-learning marketplace, or a healthcare management system, our expert team has delivered proven solutions. We handle everything from subscription billing and user management to advanced analytics and third-party integrations. When you choose E-Signature, you're partnering with Nepal's leading{' '}
                            <Link href="/services/saas-solutions" className="text-blue-600 hover:underline">
                                SaaS development company
                            </Link>{' '}
                            that understands the unique challenges of building recurring revenue businesses.
                        </p>

                        <p>
                            Don't just take our word for it - our portfolio speaks volumes. We have helped startups and enterprises launch successful SaaS platforms that serve thousands of users across multiple industries. Check out{' '}
                            <Link href="/portfolio" className="text-blue-600 hover:underline">
                                our SaaS projects
                            </Link>{' '}
                            to see real-world success stories and measurable business outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;
