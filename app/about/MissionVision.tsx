import React from 'react';
import { Rocket, Eye } from 'lucide-react';

export default function MissionVision() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Mission and Vision Text */}
                    <div className="space-y-6">
                        {/* Our Mission */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-blue-900 mt-2">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">
                                To solve complex problems utilizing the prevailing and leading technologies to empower people, businesses, and machines.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px"></div>

                        {/* Our Vision */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-blue-900 mt-2">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">
                                We have a vision to create powerful software with imagination and leading technologies, for people and machines to work together
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="lg:pl-8">
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}