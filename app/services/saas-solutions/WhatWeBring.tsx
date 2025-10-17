import { FC } from 'react';
import { Cloud, Users, CreditCard, Shield, Database, Zap, Globe, BarChart } from 'lucide-react';

const WhatWeBring: FC = () => {
    const features = [
        {
            icon: Cloud,
            title: 'Cloud-Native Architecture',
            description: 'Built on modern cloud infrastructure for automatic scaling, high availability, and global reach with minimal operational overhead.',
            color: 'blue'
        },
        {
            icon: Users,
            title: 'Multi-Tenant Platform',
            description: 'Serve thousands of customers from a single platform with data isolation, custom branding, and tenant-specific configurations.',
            color: 'purple'
        },
        {
            icon: CreditCard,
            title: 'Subscription Management',
            description: 'Automated billing, payment processing, plan upgrades, trial management, and revenue analytics integrated seamlessly.',
            color: 'green'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-level security with encryption, SSO, role-based access control, audit logs, and compliance with international standards.',
            color: 'red'
        },
        {
            icon: Database,
            title: 'Scalable Database',
            description: 'High-performance database architecture that grows with your user base, ensuring fast queries even at scale.',
            color: 'indigo'
        },
        {
            icon: Zap,
            title: 'API & Integrations',
            description: 'RESTful APIs and webhook support for seamless integration with third-party services and custom applications.',
            color: 'yellow'
        },
        {
            icon: Globe,
            title: 'Global CDN',
            description: 'Content delivery network ensures fast loading times for users worldwide with edge caching and optimization.',
            color: 'cyan'
        },
        {
            icon: BarChart,
            title: 'Analytics Dashboard',
            description: 'Real-time insights into user behavior, revenue metrics, system performance, and business intelligence.',
            color: 'orange'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { gradient: string; icon: string; border: string } } = {
            blue: { gradient: 'from-blue-500 to-blue-600', icon: 'text-blue-600', border: 'border-blue-200' },
            purple: { gradient: 'from-purple-500 to-purple-600', icon: 'text-purple-600', border: 'border-purple-200' },
            green: { gradient: 'from-green-500 to-green-600', icon: 'text-green-600', border: 'border-green-200' },
            red: { gradient: 'from-red-500 to-red-600', icon: 'text-red-600', border: 'border-red-200' },
            indigo: { gradient: 'from-indigo-500 to-indigo-600', icon: 'text-indigo-600', border: 'border-indigo-200' },
            yellow: { gradient: 'from-yellow-500 to-yellow-600', icon: 'text-yellow-600', border: 'border-yellow-200' },
            cyan: { gradient: 'from-cyan-500 to-cyan-600', icon: 'text-cyan-600', border: 'border-cyan-200' },
            orange: { gradient: 'from-orange-500 to-orange-600', icon: 'text-orange-600', border: 'border-orange-200' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Heading */}
                <h2 className="text-4xl lg:text-5xl font-normal text-center text-gray-900 mb-6">
                    What <span className="text-blue-600">We Bring</span> To Your SaaS Platform
                </h2>
                <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                    Enterprise-grade features and infrastructure that power successful SaaS businesses
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const colors = getColorClasses(feature.color);
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Need a custom feature? We build exactly what your business needs.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                        Discuss Your Requirements
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBring;
