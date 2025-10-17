"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    FiEye,
    FiHeart,
    FiZap,
    FiUsers,
    FiTrendingUp,
    FiCheck,
    FiArrowRight,
    FiStar,
    FiSmartphone,
    FiMonitor,
    FiTablet,
    FiPenTool,
    FiLayers,
    FiTarget
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const UIUXDesignPage = () => {
    const [activeTab, setActiveTab] = useState('web');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const designProcess = [
        {
            step: "01",
            title: "Research & Discovery",
            description: "Understanding your users, business goals, and market landscape",
            icon: FiTarget,
            color: "bg-blue-500"
        },
        {
            step: "02",
            title: "Wireframing & Prototyping",
            description: "Creating the blueprint and interactive prototypes",
            icon: FiLayers,
            color: "bg-indigo-500"
        },
        {
            step: "03",
            title: "Visual Design",
            description: "Crafting beautiful, on-brand visual experiences",
            icon: FiPenTool,
            color: "bg-emerald-500"
        },
        {
            step: "04",
            title: "Testing & Refinement",
            description: "User testing and iterative improvements",
            icon: FiZap,
            color: "bg-purple-500"
        }
    ];

    const portfolioTabs = {
        web: [
            {
                title: 'E-commerce Dashboard',
                category: 'Web Application',
                description: 'Clean, data-driven interface for online store management',
                image: '/api/placeholder/600/400',
                metrics: ['40% faster task completion', '25% increase in user satisfaction']
            },
            {
                title: 'Banking Platform',
                category: 'Financial Interface',
                description: 'Secure, intuitive design for digital banking',
                image: '/api/placeholder/600/400',
                metrics: ['60% reduction in support calls', '35% increase in adoption']
            },
            {
                title: 'Learning Management System',
                category: 'Educational Platform',
                description: 'Engaging interface for online education',
                image: '/api/placeholder/600/400',
                metrics: ['50% better completion rates', '90% user satisfaction']
            }
        ],
        mobile: [
            {
                title: 'Food Delivery App',
                category: 'Mobile Application',
                description: 'Intuitive ordering experience with real-time tracking',
                image: '/api/placeholder/300/600',
                metrics: ['70% faster ordering', '4.8★ app store rating']
            },
            {
                title: 'Fitness Tracker',
                category: 'Health & Wellness',
                description: 'Motivating interface for workout tracking',
                image: '/api/placeholder/300/600',
                metrics: ['85% daily active users', '45% better engagement']
            },
            {
                title: 'Finance Manager',
                category: 'Personal Finance',
                description: 'Simple expense tracking and budget management',
                image: '/api/placeholder/300/600',
                metrics: ['300% increase in usage', '95% user retention']
            }
        ],
        branding: [
            {
                title: 'Tech Startup Identity',
                category: 'Brand Design',
                description: 'Complete visual identity for AI startup',
                image: '/api/placeholder/500/350',
                metrics: ['200% brand recognition', '150% website engagement']
            },
            {
                title: 'Restaurant Branding',
                category: 'Hospitality Design',
                description: 'Warm, inviting brand for local restaurant chain',
                image: '/api/placeholder/500/350',
                metrics: ['300% social media growth', '40% sales increase']
            },
            {
                title: 'Healthcare Brand',
                category: 'Medical Industry',
                description: 'Trustworthy, professional healthcare branding',
                image: '/api/placeholder/500/350',
                metrics: ['500% appointment bookings', '98% trust rating']
            }
        ]
    };

    const services = [
        {
            icon: FiMonitor,
            title: 'Web Interface Design',
            description: 'Responsive web designs that convert visitors into customers',
            features: ['Responsive layouts', 'Conversion optimization', 'Brand consistency']
        },
        {
            icon: FiSmartphone,
            title: 'Mobile App Design',
            description: 'Native iOS and Android app interfaces that users love',
            features: ['Platform guidelines', 'Touch interactions', 'Micro-animations']
        },
        {
            icon: FiEye,
            title: 'User Research',
            description: 'Data-driven insights to understand your users deeply',
            features: ['User interviews', 'Usability testing', 'Analytics review']
        },
        {
            icon: FiHeart,
            title: 'Brand Identity',
            description: 'Complete visual identity that tells your brand story',
            features: ['Logo design', 'Color palette', 'Typography system']
        }
    ];

    const packages = [
        {
            name: 'Essential Design',
            price: 'NPR 50,000',
            duration: '2-3 weeks',
            features: [
                'UI design for 5-8 pages',
                'Mobile responsive layouts',
                'Basic user research',
                'Design system basics',
                '3 revision rounds'
            ],
            popular: false,
            ideal: 'Small businesses, startups'
        },
        {
            name: 'Professional Design',
            price: 'NPR 125,000',
            duration: '4-6 weeks',
            features: [
                'Complete UX research',
                'Interactive prototypes',
                'UI design for 10-15 pages',
                'Advanced animations',
                'Comprehensive design system',
                'Usability testing',
                '5 revision rounds'
            ],
            popular: true,
            ideal: 'Growing businesses, apps'
        },
        {
            name: 'Premium Design',
            price: 'NPR 250,000',
            duration: '6-10 weeks',
            features: [
                'In-depth user research',
                'Multiple design concepts',
                'Advanced prototyping',
                'A/B testing designs',
                'Brand identity design',
                'Design system documentation',
                'Ongoing design support'
            ],
            popular: false,
            ideal: 'Enterprise, complex platforms'
        }
    ];

    const faqs = [
        {
            question: 'What\'s the difference between UI and UX design?',
            answer: 'UI (User Interface) focuses on how things look and feel - colors, typography, buttons. UX (User Experience) focuses on how things work - user journey, usability, problem-solving. We provide both for complete design solutions.'
        },
        {
            question: 'Do you conduct user research for Nepal-specific audiences?',
            answer: 'Yes! We understand Nepal\'s diverse user base, internet habits, and cultural preferences. Our research includes local user testing and market analysis to ensure designs work for your target audience.'
        },
        {
            question: 'Can you redesign our existing website or app?',
            answer: 'Absolutely! We specialize in redesigns that improve user experience, increase conversions, and modernize visual appeal while maintaining your brand identity and user familiarity.'
        },
        {
            question: 'Do you provide design files and assets?',
            answer: 'Yes, you receive all design files (Figma, Adobe), style guides, design system documentation, and exported assets. Everything needed for development and future updates.'
        },
        {
            question: 'How do you ensure designs work for development?',
            answer: 'We work closely with development teams, provide detailed specifications, use developer-friendly tools like Figma, and ensure all designs are technically feasible and responsive.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center bg-[#f46036] rounded-full px-4 py-2 w-fit mb-6">
                                <FiPenTool className="h-5 w-5 text-white mr-2" />
                                <span className="text-white font-semibold text-sm">UI/UX Design</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                                Design That
                                <span className="text-[#f46036] block">
                                    Converts
                                </span>
                                & Delights
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We create user-centered designs that not only look beautiful but drive real business results. From research to final pixels.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="#portfolio"
                                    className="bg-[#f46036] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e55530] transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center group"
                                >
                                    See Our Work
                                    <FiEye className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#process"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                                >
                                    Our Process
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Creative Design Showcase */}
                        <div className="lg:col-span-7">
                            <div className="relative">
                                {/* Main Design Canvas */}
                                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 relative overflow-hidden">
                                        <div className="absolute top-4 left-4 flex space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>

                                        {/* Mock Interface Elements */}
                                        <div className="mt-8 space-y-4">
                                            <div className="h-8 bg-white rounded-lg shadow-sm"></div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-24 bg-blue-500 rounded-lg shadow-sm"></div>
                                                <div className="h-24 bg-emerald-500 rounded-lg shadow-sm"></div>
                                                <div className="h-24 bg-purple-500 rounded-lg shadow-sm"></div>
                                            </div>
                                            <div className="h-6 bg-white rounded-lg shadow-sm w-2/3"></div>
                                            <div className="h-6 bg-white rounded-lg shadow-sm w-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Design Tools */}
                                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                                    <FiPenTool className="h-8 w-8 text-purple-500" />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                    <FiLayers className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                                    <FiHeart className="h-8 w-8 text-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process - Horizontal Timeline */}
            <section id="process" className="py-20 bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Our Design Process
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            A proven methodology that ensures every design decision is purposeful and user-centered
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-700 transform -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
                            {designProcess.map((step, index) => (
                                <div key={index} className="relative">
                                    {/* Step Circle */}
                                    <div className="flex justify-center mb-8">
                                        <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Step Number */}
                                    <div className="text-center mb-4">
                                        <span className="text-6xl font-bold text-blue-800 opacity-50">{step.step}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-blue-200">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio - Tabbed Gallery */}
            <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Design Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Real projects with measurable impact on user experience and business metrics
                        </p>
                    </div>

                    {/* Portfolio Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
                            <div className="flex space-x-2">
                                {Object.keys(portfolioTabs).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 capitalize ${activeTab === tab
                                            ? 'bg-[#f46036] text-white shadow-lg'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab === 'web' ? 'Web Design' : tab === 'mobile' ? 'Mobile Apps' : 'Branding'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioTabs[activeTab as keyof typeof portfolioTabs].map((item, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-30">🎨</div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <div className="space-y-2">
                                        {item.metrics.map((metric, metricIndex) => (
                                            <div key={metricIndex} className="flex items-center text-sm text-emerald-600">
                                                <FiTrendingUp className="h-4 w-4 mr-2" />
                                                {metric}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Card Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Design Services We Offer
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-600">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Creative Layout */}
            <section id="packages" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Design Investment Plans
                        </h2>
                        <p className="text-xl text-gray-600">
                            Flexible packages designed to match your project scope and budget
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${pkg.popular
                                ? 'shadow-2xl border-2 border-[#f46036] transform scale-105'
                                : 'shadow-lg hover:shadow-xl border border-gray-200'
                                }`}>
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#f46036] text-white px-6 py-2 rounded-full text-sm font-bold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                                    <div className="text-5xl font-bold text-[#f46036] mb-2">{pkg.price}</div>
                                    <div className="text-gray-600 mb-2">Timeline: {pkg.duration}</div>
                                    <div className="text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2">{pkg.ideal}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <FiCheck className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 px-6 rounded-full font-semibold text-center transition-all duration-300 block ${pkg.popular
                                        ? 'bg-[#f46036] text-white hover:bg-[#e55530] shadow-lg'
                                        : 'border-2 border-[#f46036] text-[#f46036] hover:bg-[#f46036] hover:text-white'
                                        }`}
                                >
                                    Start Design Project
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Design Questions & Answers
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
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
            <section className="py-20 bg-gradient-to-r from-[#f46036] to-orange-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Create Amazing User Experiences?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Let's discuss your design needs and create interfaces that your users will love and your business will benefit from.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-[#f46036] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
                        >
                            Start Design Project
                            <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="tel:+977123456789"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#f46036] transition-all duration-300 inline-flex items-center justify-center"
                        >
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UIUXDesignPage;