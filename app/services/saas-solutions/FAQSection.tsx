'use client';

import { FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'What is SaaS and how is it different from traditional software?',
            answer: 'SaaS (Software as a Service) is cloud-based software delivered over the internet. Unlike traditional software that requires installation on individual computers, SaaS applications run on cloud servers and can be accessed from any device with an internet connection. Key benefits include automatic updates, lower upfront costs, scalability, and accessibility from anywhere.',
        },
        {
            question: 'How much does it cost to develop a SaaS platform in Nepal?',
            answer: 'The cost varies based on complexity, features, and platform requirements. A basic SaaS MVP can start from NPR 800K-1.5M, while enterprise-grade platforms can range from NPR 2M-5M+. Factors include multi-tenancy complexity, third-party integrations, payment systems, and custom features. We provide detailed quotes after understanding your specific requirements.',
        },
        {
            question: 'Which technology stack do you use for SaaS development?',
            answer: 'We use modern, scalable technologies including React/Next.js for frontend, Node.js/Python/Java for backend, PostgreSQL/MongoDB for databases, AWS/Azure/Google Cloud for hosting, Stripe/PayPal for payments, and Docker/Kubernetes for containerization. The stack is customized based on your specific needs and scaling requirements.',
        },
        {
            question: 'How long does it take to develop a SaaS platform?',
            answer: 'A minimum viable product (MVP) typically takes 3-4 months, while a full-featured SaaS platform can take 6-9 months or more. The timeline depends on feature complexity, integrations, design requirements, and testing phases. We follow agile methodology, delivering working features incrementally for faster time-to-market.',
        },
        {
            question: 'Do you provide ongoing maintenance and support for SaaS platforms?',
            answer: 'Yes! SaaS platforms require continuous monitoring, updates, and support. We offer comprehensive maintenance packages including server monitoring, security patches, feature updates, bug fixes, performance optimization, and 24/7 technical support. We also provide DevOps services for scaling and infrastructure management.',
        },
        {
            question: 'Can you help with subscription billing and payment integration?',
            answer: 'Absolutely! We integrate robust subscription management systems with automated billing, multiple payment gateways (Stripe, PayPal, eSewa, Khalti), plan management, trial periods, upgrade/downgrade flows, invoice generation, and revenue analytics. We ensure PCI compliance and secure payment processing.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about SaaS development
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-0 bg-white rounded-2xl shadow-sm overflow-hidden">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 lg:py-8 px-6 lg:px-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg lg:text-xl font-medium text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-lg mb-4">
                        Still have questions?
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline">
                        Contact our SaaS experts →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
