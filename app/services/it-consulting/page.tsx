"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    FiSettings,
    FiShield,
    FiTrendingUp,
    FiUsers,
    FiCloud,
    FiDatabase,
    FiArrowRight,
    FiCheckCircle,
    FiAlertTriangle,
    FiCpu,
    FiLock,
    FiZap,
    FiMonitor,
    FiServer,
    FiWifi,
    FiBarChart,
    FiTarget,
    FiAward,
    FiClock
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const ITConsultingPage = () => {
    const [activeChallenge, setActiveChallenge] = useState(0);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const consultingAreas = [
        {
            title: "IT Strategy & Planning",
            description: "Align technology with business goals for maximum efficiency and growth",
            icon: FiTarget,
            services: [
                "Technology roadmap development",
                "Digital transformation planning",
                "IT budget optimization",
                "Vendor selection & management"
            ],
            benefits: [
                "Reduced IT costs by 30-40%",
                "Improved operational efficiency",
                "Better technology ROI"
            ]
        },
        {
            title: "Infrastructure Assessment",
            description: "Comprehensive evaluation of your current IT systems and infrastructure",
            icon: FiServer,
            services: [
                "Network architecture review",
                "Security vulnerability assessment",
                "Performance optimization",
                "Scalability planning"
            ],
            benefits: [
                "Identify cost-saving opportunities",
                "Prevent system failures",
                "Improve security posture"
            ]
        },
        {
            title: "Cloud Migration",
            description: "Seamless transition to cloud infrastructure with minimal disruption",
            icon: FiCloud,
            services: [
                "Cloud readiness assessment",
                "Migration strategy planning",
                "Data transfer & setup",
                "Staff training & support"
            ],
            benefits: [
                "50% reduction in infrastructure costs",
                "Improved accessibility",
                "Enhanced disaster recovery"
            ]
        },
        {
            title: "Cybersecurity Consulting",
            description: "Protect your business from digital threats with comprehensive security solutions",
            icon: FiShield,
            services: [
                "Security policy development",
                "Incident response planning",
                "Employee security training",
                "Compliance auditing"
            ],
            benefits: [
                "99.9% threat prevention",
                "Regulatory compliance",
                "Reduced security risks"
            ]
        }
    ];

    const commonChallenges = [
        {
            problem: "Outdated IT Systems",
            impact: "Slow operations, high maintenance costs, security vulnerabilities",
            solution: "System modernization with phased migration approach",
            timeline: "3-6 months",
            icon: FiMonitor,
            color: "bg-red-500"
        },
        {
            problem: "Poor Network Performance",
            impact: "Productivity loss, frustrated employees, customer complaints",
            solution: "Network optimization and infrastructure upgrade",
            timeline: "1-2 months",
            icon: FiWifi,
            color: "bg-orange-500"
        },
        {
            problem: "Data Security Concerns",
            impact: "Risk of data breaches, compliance issues, reputation damage",
            solution: "Comprehensive security framework implementation",
            timeline: "2-4 months",
            icon: FiLock,
            color: "bg-yellow-500"
        },
        {
            problem: "High IT Costs",
            impact: "Budget strain, reduced investment in growth, inefficient spending",
            solution: "IT cost optimization and strategic planning",
            timeline: "1-3 months",
            icon: FiBarChart,
            color: "bg-blue-500"
        },
        {
            problem: "Lack of IT Strategy",
            impact: "Disconnected systems, unclear priorities, technology debt",
            solution: "Strategic IT roadmap development",
            timeline: "2-3 months",
            icon: FiTarget,
            color: "bg-purple-500"
        }
    ];

    const industries = [
        {
            name: "Healthcare",
            icon: "🏥",
            challenges: ["Patient data security", "System integration", "Compliance requirements"],
            solutions: ["HIPAA compliance", "Electronic health records", "Telemedicine setup"]
        },
        {
            name: "Education",
            icon: "🎓",
            challenges: ["Remote learning infrastructure", "Student data management", "Budget constraints"],
            solutions: ["Learning management systems", "Cloud-based collaboration", "Cost-effective IT"]
        },
        {
            name: "Manufacturing",
            icon: "🏭",
            challenges: ["Legacy system integration", "IoT implementation", "Operational efficiency"],
            solutions: ["Industrial IoT", "ERP integration", "Automation consulting"]
        },
        {
            name: "Financial Services",
            icon: "💰",
            challenges: ["Regulatory compliance", "Digital transformation", "Cybersecurity"],
            solutions: ["Fintech solutions", "Security frameworks", "Digital banking"]
        },
        {
            name: "Retail & E-commerce",
            icon: "🛒",
            challenges: ["Omnichannel integration", "Inventory management", "Customer experience"],
            solutions: ["POS systems", "E-commerce platforms", "Customer analytics"]
        },
        {
            name: "Government",
            icon: "🏛️",
            challenges: ["Digital citizen services", "Inter-department connectivity", "Transparency"],
            solutions: ["E-governance platforms", "Digital workflows", "Public portals"]
        }
    ];

    const faqs = [
        {
            question: 'How do you assess our current IT infrastructure?',
            answer: 'We conduct a comprehensive audit covering hardware, software, networks, security, and processes. This includes performance testing, security vulnerability scans, and workflow analysis to identify improvement opportunities.'
        },
        {
            question: 'What is the typical timeline for IT consulting projects?',
            answer: 'Project timelines vary based on scope. Quick assessments take 1-2 weeks, while comprehensive digital transformation projects can take 6-12 months. We provide detailed timelines during initial consultation.'
        },
        {
            question: 'Do you provide ongoing support after implementation?',
            answer: 'Yes! We offer various support packages including system monitoring, maintenance, user training, and strategic guidance to ensure long-term success of implemented solutions.'
        },
        {
            question: 'How do you ensure minimal disruption during transitions?',
            answer: 'We use phased implementation approaches, conduct thorough testing, provide comprehensive training, and maintain parallel systems during critical transitions to minimize business disruption.'
        },
        {
            question: 'Can you work with our existing IT team?',
            answer: 'Absolutely! We collaborate closely with internal IT teams, providing training, knowledge transfer, and ongoing support to enhance their capabilities and ensure project success.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Professional Consulting Layout */}
            <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center bg-[#f46036] rounded-full px-4 py-2 w-fit mb-6">
                                <FiSettings className="h-5 w-5 text-white mr-2" />
                                <span className="text-white font-semibold text-sm">IT Consulting & Strategy</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                                Transform Your
                                <span className="text-[#f46036] block">
                                    IT Operations
                                </span>
                                With Expert Guidance
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Strategic IT consulting to optimize your technology infrastructure, reduce costs, and align IT with your business goals. From assessment to implementation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="#consultation"
                                    className="bg-[#f46036] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e55530] transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center group"
                                >
                                    Get Free IT Assessment
                                    <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#challenges"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                                >
                                    Common IT Challenges
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">15+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">100+</div>
                                    <div className="text-sm text-gray-600">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">98%</div>
                                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Consulting Illustration */}
                        <div className="lg:col-span-1">
                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <FiAward className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Certified IT Consultants</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {['Strategic Planning', 'Infrastructure Audit', 'Security Assessment', 'Cloud Migration'].map((service, index) => (
                                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                <FiCheckCircle className="h-5 w-5 text-emerald-500" />
                                                <span className="text-gray-700 text-sm">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common IT Challenges - Problem/Solution Format */}
            <section id="challenges" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Common IT Challenges We Solve
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Identify your IT pain points and discover how our expert consulting can transform your technology landscape
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Challenge List */}
                        <div className="lg:col-span-5 space-y-4">
                            {commonChallenges.map((challenge, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveChallenge(index)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeChallenge === index
                                        ? 'bg-white border-2 border-blue-500 shadow-lg'
                                        : 'bg-white border border-gray-200 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 ${challenge.color} rounded-xl flex items-center justify-center`}>
                                            <challenge.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.problem}</h3>
                                            <p className="text-sm text-gray-600">{challenge.impact}</p>
                                        </div>
                                        {activeChallenge === index && (
                                            <FiArrowRight className="h-5 w-5 text-blue-500 mt-1" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Solution Details */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 h-full">
                                <div className="flex items-start space-x-6 mb-8">
                                    <div className={`w-16 h-16 ${commonChallenges[activeChallenge].color} rounded-2xl flex items-center justify-center`}>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {commonChallenges[activeChallenge].problem}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <FiClock className="h-4 w-4" />
                                                <span>{commonChallenges[activeChallenge].timeline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <FiAlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                                            Business Impact
                                        </h4>
                                        <p className="text-gray-600 bg-red-50 p-4 rounded-xl border border-red-100">
                                            {commonChallenges[activeChallenge].impact}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <FiCheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                                            Our Solution
                                        </h4>
                                        <p className="text-gray-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                            {commonChallenges[activeChallenge].solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Areas - Service Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Consulting Expertise
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive IT consulting services to optimize your technology investments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {consultingAreas.map((area, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                                        <area.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                                        <p className="text-gray-600 mb-6">{area.description}</p>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Services Include:</h4>
                                                <ul className="space-y-2">
                                                    {area.services.map((service, serviceIndex) => (
                                                        <li key={serviceIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                                            <span>{service}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                                                <ul className="space-y-2">
                                                    {area.benefits.map((benefit, benefitIndex) => (
                                                        <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-emerald-600">
                                                            <FiTrendingUp className="h-4 w-4 mt-0.5" />
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Expertise - Icon Grid */}
            <section className="py-20 bg-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Industry Expertise
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Specialized IT consulting solutions tailored to your industry's unique challenges and requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-4">{industry.icon}</div>
                                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-blue-200 mb-2">Common Challenges:</h4>
                                        <ul className="space-y-1">
                                            {industry.challenges.map((challenge, challengeIndex) => (
                                                <li key={challengeIndex} className="text-sm text-blue-100 flex items-start space-x-2">
                                                    <span className="text-red-400">•</span>
                                                    <span>{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-blue-200 mb-2">Our Solutions:</h4>
                                        <ul className="space-y-1">
                                            {industry.solutions.map((solution, solutionIndex) => (
                                                <li key={solutionIndex} className="text-sm text-blue-100 flex items-start space-x-2">
                                                    <span className="text-emerald-400">•</span>
                                                    <span>{solution}</span>
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

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            IT Consulting Questions
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
            <section id="consultation" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Optimize Your IT Infrastructure?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get a free IT assessment and discover how strategic consulting can transform your technology operations and reduce costs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#f46036] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e55530] transition-colors inline-flex items-center justify-center group"
                        >
                            Schedule Free IT Assessment
                            <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="tel:+977123456789"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                        >
                            Call for Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ITConsultingPage;