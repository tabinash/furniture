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
            question: 'What is the website design and development cost in Nepal?',
            answer: 'The cost varies depending on the complexity and features required. Contact us for a detailed quote.',
        },
        {
            question: 'Which programming language is best for web designing in Nepal?',
            answer: 'We use modern technologies like React, Next.js, and TypeScript for optimal performance and maintainability.',
        },
        {
            question: 'Which company is best for web designing in Nepal?',
            answer: 'E-Signature is recognized as one of the top web development companies in Nepal with proven track record.',
        },
        {
            question: 'How many hours does it take to design a website in Kathmandu, Nepal?',
            answer: 'The timeline depends on project scope. A simple website can take 2-4 weeks, while complex projects may take longer.',
        },
        {
            question: 'What industries have you worked with?',
            answer: 'We have worked with various industries including e-commerce, healthcare, education, finance, and more.',
        },
        {
            question: 'Do you offer custom web applications or only templated designs?',
            answer: 'We specialize in custom web applications tailored to your specific business needs and requirements.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
                {/* Section Heading */}
                <h2 className="text-4xl  font-bold text-gray-900 mb-12">
                    FAQs
                </h2>

                {/* FAQ List */}
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 lg:py-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
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
                                <div className="pb-6 lg:pb-8 pr-12">
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;