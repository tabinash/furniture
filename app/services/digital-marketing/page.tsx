"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    FiTrendingUp,
    FiTarget,
    FiUsers,
    FiSearch,
    FiBarChart,
    FiVolume2,
    FiArrowRight,
    FiGlobe,
    FiStar,
    FiEye,
    FiHeart,
    FiShare2,
    FiPlay,
    FiMail,
    FiInstagram,
    FiMonitor
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const DigitalMarketingPage = () => {
    const [activeService, setActiveService] = useState(0);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const marketingStats = [
        { number: "200%", label: "Average Traffic Increase", icon: FiTrendingUp },
        { number: "150%", label: "Lead Generation Boost", icon: FiUsers },
        { number: "85%", label: "Client Retention Rate", icon: FiHeart },
        { number: "50+", label: "Successful Campaigns", icon: FiTarget }
    ];

    const services = [
        {
            title: "Search Engine Optimization",
            shortTitle: "SEO",
            description: "Get your business found on Google with our proven SEO strategies tailored for the Nepal market.",
            features: [
                "Local SEO for Nepal businesses",
                "Google My Business optimization",
                "Keyword research & content strategy",
                "Technical SEO improvements",
                "Monthly performance reports"
            ],
            results: [
                "Average 200% increase in organic traffic",
                "Top 3 rankings for target keywords",
                "50% more local business inquiries"
            ],
            icon: FiSearch,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            title: "Social Media Marketing",
            shortTitle: "SMM",
            description: "Build a strong social presence and engage with your audience across Facebook, Instagram, and LinkedIn.",
            features: [
                "Content strategy & creation",
                "Community management",
                "Facebook & Instagram ads",
                "Influencer partnerships",
                "Social media analytics"
            ],
            results: [
                "300% growth in social media followers",
                "150% increase in engagement rates",
                "40% more website traffic from social"
            ],
            icon: FiUsers,
            gradient: "from-pink-500 to-purple-600"
        },
        {
            title: "Google Ads Management",
            shortTitle: "PPC",
            description: "Drive immediate traffic and leads with expertly managed Google Ads campaigns for maximum ROI.",
            features: [
                "Campaign setup & optimization",
                "Keyword bidding strategy",
                "Ad copy creation & testing",
                "Landing page optimization",
                "Conversion tracking"
            ],
            results: [
                "Average 300% return on ad spend",
                "50% reduction in cost per click",
                "5x increase in qualified leads"
            ],
            icon: FiTarget,
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            title: "Content Marketing",
            shortTitle: "Content",
            description: "Attract and retain customers with valuable, relevant content that positions your brand as an authority.",
            features: [
                "Blog writing & strategy",
                "Video content creation",
                "Email marketing campaigns",
                "Infographic design",
                "Content calendar planning"
            ],
            results: [
                "400% increase in blog traffic",
                "60% higher email open rates",
                "80% more qualified leads from content"
            ],
            icon: FiVolume2,
            gradient: "from-orange-500 to-red-600"
        }
    ];

    const caseStudies = [
        {
            client: "Nepal Trekking Company",
            industry: "Tourism",
            challenge: "Low online visibility during peak season",
            solution: "SEO + Google Ads + Social Media",
            results: [
                "500% increase in bookings",
                "Top 3 Google rankings for 'Nepal trekking'",
                "15,000+ social media followers"
            ],
            duration: "6 months",
            bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        {
            client: "Local Restaurant Chain",
            industry: "Food & Beverage",
            challenge: "Competing with delivery apps",
            solution: "Social Media + Content + Local SEO",
            results: [
                "300% increase in direct orders",
                "50% growth in foot traffic",
                "80% boost in customer loyalty"
            ],
            duration: "4 months",
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
        },
        {
            client: "E-commerce Startup",
            industry: "Fashion Retail",
            challenge: "Building brand awareness from zero",
            solution: "Full Digital Marketing Suite",
            results: [
                "1000% increase in website traffic",
                "250% growth in online sales",
                "Built 25,000+ email subscribers"
            ],
            duration: "8 months",
            bgColor: "bg-gradient-to-br from-purple-500 to-orange-600"
        }
    ];

    const faqs = [
        {
            question: 'How long does it take to see results from digital marketing?',
            answer: 'SEO typically shows results in 3-6 months, while Google Ads and social media can show immediate traffic. For sustainable growth, we recommend a minimum 6-month commitment to see significant business impact.'
        },
        {
            question: 'Do you work with businesses outside Kathmandu?',
            answer: 'Yes! We work with businesses across Nepal and internationally. Our digital strategies are designed to work locally and globally, with specific tactics for Nepal market conditions.'
        },
        {
            question: 'What makes your approach different for Nepal businesses?',
            answer: 'We understand Nepal\'s unique market - local search behaviors, popular social platforms, internet usage patterns, and cultural preferences. Our strategies are specifically adapted for Nepali audiences.'
        },
        {
            question: 'How do you measure marketing success?',
            answer: 'We track key metrics like website traffic, lead generation, conversion rates, social engagement, and most importantly - actual business growth and ROI. Monthly reports show clear progress.'
        },
        {
            question: 'Can you help with both Nepali and English content?',
            answer: 'Absolutely! Our team creates content in both Nepali and English, understanding cultural nuances and language preferences of different target audiences in Nepal.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Metrics Dashboard Style */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Section */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center bg-[#f46036] rounded-full px-6 py-3 w-fit mx-auto mb-8">
                            <FiTrendingUp className="h-6 w-6 text-white mr-3" />
                            <span className="text-white font-semibold">Digital Marketing That Delivers Results</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
                            Grow Your Business
                            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                                Online
                            </span>
                        </h1>

                        <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                            From SEO to social media, we create data-driven marketing strategies that deliver measurable growth for businesses across Nepal.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {marketingStats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                                    <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-gray-300 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Interactive Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Digital Marketing Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital marketing solutions designed to increase your online presence and drive business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Service List */}
                        <div className="lg:col-span-4 space-y-4">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeService === index
                                        ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient}`}>
                                            <service.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{service.shortTitle}</h3>
                                            <p className="text-sm text-gray-600">{service.title}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Active Service Details */}
                        <div className="lg:col-span-8">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${services[activeService].gradient}`}>
                                        {(() => {
                                            const Icon = services[activeService].icon;
                                            return <Icon className="h-8 w-8 text-white" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                                        <p className="text-gray-600">{services[activeService].description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Do</h4>
                                        <ul className="space-y-3">
                                            {services[activeService].features.map((feature, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Typical Results</h4>
                                        <ul className="space-y-3">
                                            {services[activeService].results.map((result, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <FiTrendingUp className="h-5 w-5 text-emerald-500 mt-0.5" />
                                                    <span className="text-gray-600">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Why Choose Us - Feature Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Why Choose Navexis for Digital Marketing?
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Nepal Market Expertise",
                                        description: "Deep understanding of local search behavior, social media usage, and cultural preferences",
                                        icon: FiGlobe,
                                        color: "text-blue-500"
                                    },
                                    {
                                        title: "Data-Driven Approach",
                                        description: "Every strategy backed by analytics, A/B testing, and continuous optimization",
                                        icon: FiBarChart,
                                        color: "text-emerald-500"
                                    },
                                    {
                                        title: "Transparent Reporting",
                                        description: "Monthly detailed reports showing exactly how your investment is performing",
                                        icon: FiEye,
                                        color: "text-purple-500"
                                    },
                                    {
                                        title: "Integrated Strategies",
                                        description: "SEO, social media, ads, and content working together for maximum impact",
                                        icon: FiShare2,
                                        color: "text-pink-500"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                                        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${feature.color}`}>
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Marketing Dashboard Mockup */}
                            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">Marketing Dashboard</h3>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 rounded-xl p-4">
                                            <div className="text-blue-600 text-2xl font-bold">8,547</div>
                                            <div className="text-blue-800 text-sm">Website Visitors</div>
                                        </div>
                                        <div className="bg-emerald-50 rounded-xl p-4">
                                            <div className="text-emerald-600 text-2xl font-bold">342</div>
                                            <div className="text-emerald-800 text-sm">New Leads</div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="text-gray-800 text-sm mb-2">Campaign Performance</div>
                                        <div className="flex space-x-2 h-20 items-end">
                                            {[65, 80, 45, 95, 70, 85, 60].map((height, index) => (
                                                <div key={index} className="bg-[#f46036] rounded-sm flex-1" style={{ height: `${height}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Digital Marketing Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                    <FiArrowRight className={`h-5 w-5 text-blue-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                                </button>
                                {activeFaq === index && (
                                    <div className="px-8 pb-6">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Grow Your Business Online?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's create a digital marketing strategy that delivers real results for your business.
                        Get a free consultation and marketing audit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#f46036] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e55530] transition-colors inline-flex items-center justify-center group"
                        >
                            Get Free Marketing Audit
                            <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="tel:+977123456789"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center"
                        >
                            Call for Strategy Session
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;