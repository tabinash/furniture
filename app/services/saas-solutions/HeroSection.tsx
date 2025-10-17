import Image from 'next/image';
import { FC } from 'react';
import { Cloud, Zap, Shield } from 'lucide-react';

const HeroSection: FC = () => {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 max-w-2xl">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 w-fit px-4 py-2 rounded-full">
                            <Cloud className="w-5 h-5 text-purple-600" />
                            <span className="text-purple-600 font-semibold text-sm">SaaS Solutions</span>
                        </div>

                        <h1 className="text-5xl font-normal text-gray-900 leading-tight">
                            Build Scalable{' '}
                            <span className="text-blue-600">
                                SaaS Platforms
                            </span>{' '}
                            for Your Business Growth
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Partner with Nepal's leading SaaS development company to create cloud-based software solutions that scale with your business. We specialize in building multi-tenant SaaS platforms with subscription management, automated billing, and enterprise-grade security. From CRM systems and e-learning platforms to marketplace solutions and healthcare management systems, we transform your SaaS vision into reality with cutting-edge technologies and industry best practices.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                                Book your free consultation
                            </button>

                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">99.9% Uptime</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <span className="font-medium">Secure & Scalable</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Purple-Blue Gradient Circle Background */}
                    <div className="relative flex justify-center items-center lg:justify-end">
                        {/* Large Gradient Circle Background */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-full -z-10 translate-x-32"></div>

                        {/* SaaS Dashboard Mockup */}
                        <div className="relative z-10 w-full max-w-2xl">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 bg-gray-100 rounded-lg px-4 py-1 text-xs text-gray-500">
                                        https://your-saas-platform.com
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="space-y-4">
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-blue-600">2.5K</div>
                                            <div className="text-xs text-gray-600">Active Users</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-purple-600">$45K</div>
                                            <div className="text-xs text-gray-600">MRR</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-green-600">98%</div>
                                            <div className="text-xs text-gray-600">Uptime</div>
                                        </div>
                                    </div>

                                    {/* Chart */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-sm font-semibold text-gray-700 mb-3">Revenue Growth</div>
                                        <div className="flex items-end gap-2 h-24">
                                            {[30, 45, 35, 60, 50, 75, 65, 80].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t"
                                                    style={{ height: `${height}%` }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                                                <div className="flex-1">
                                                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                                                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                                <Cloud className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
