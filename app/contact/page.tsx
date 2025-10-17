'use client';

export default function Contact() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden">
            {/* Decorative Circle in Top Right Corner */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#1748c5] rounded-full  blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

                {/* Left Section - Contact Information */}
                <div>
                    <h2 className="text-4xl  font-normal mb-8">
                        Get in <span className="text-[#1748c5]">touch.</span>
                    </h2>

                    <div className="border-t border-gray-300 my-8"></div>

                    {/* Location Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[#1748c5] mb-4 flex items-center gap-2">
                            Kathmandu, Nepal
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </h3>

                        {/* Address */}
                        <div className="flex items-start gap-3 mb-4 text-gray-700">
                            <svg className="w-5 h-5 text-[#1748c5] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p>USHA Plaza - 4rd and 5th Floor, Kalopul, Kathmandu</p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 mb-4 text-gray-700">
                            <svg className="w-5 h-5 text-[#1748c5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a href="tel:+9779851195578" className="hover:text-[#1748c5] transition">+9779851195578</a>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 mb-4 text-gray-700">
                            <svg className="w-5 h-5 text-[#1748c5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <div className="flex flex-col">
                                <a href="mailto:info@esignature.com.np" className="hover:text-[#1748c5] transition">info@esignature.com.np</a>
                                <a href="mailto:brijesh@esignature.com.np" className="hover:text-[#1748c5] transition">brijesh@esignature.com.np</a>
                            </div>
                        </div>

                        {/* Viber */}
                        <div className="flex items-center gap-3 mb-4 text-gray-700">
                            <svg className="w-5 h-5 text-[#1748c5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p>+9779851195578</p>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center gap-3 mb-4 text-gray-700">
                            <svg className="w-5 h-5 text-[#1748c5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p>+9779851195578</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 my-8"></div>

                    {/* CTA Button */}
                    <button className="bg-[#1748c5] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
                        Let's Collaborate
                    </button>
                </div>

                {/* Right Section - Google Map */}
                <div className="w-full h-[600px] overflow-hidden ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6095826673707!2d85.31195!3d27.701556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f5c9a0001%3A0x0!2zMjfCsDQyJzA1LjYiTiA4NcKwMTgnNDMuMCJF!5e0!3m2!1sen!2snp!4v1696502400000!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="E-Signature Office Location"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}