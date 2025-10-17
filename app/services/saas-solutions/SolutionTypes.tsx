import { FC } from 'react';
import { Building2, GraduationCap, ShoppingCart, Stethoscope, TrendingUp, Package } from 'lucide-react';

const SolutionTypes: FC = () => {
    const solutions = [
        {
            icon: Building2,
            title: 'Business Management SaaS',
            description: 'CRM, project management, team collaboration, and workflow automation platforms',
            features: [
                'Customer relationship management',
                'Task & project tracking',
                'Team collaboration tools',
                'Reporting & analytics',
                'Document management',
                'Time tracking & invoicing'
            ],
            gradient: 'from-blue-500 to-indigo-600'
        },
        {
            icon: GraduationCap,
            title: 'E-Learning Platforms',
            description: 'Online education, course management, student tracking, and certification systems',
            features: [
                'Course creation & management',
                'Student progress tracking',
                'Video streaming & hosting',
                'Quiz & assessment tools',
                'Certificate generation',
                'Discussion forums'
            ],
            gradient: 'from-purple-500 to-orange-600'
        },
        {
            icon: ShoppingCart,
            title: 'Marketplace Solutions',
            description: 'Multi-vendor platforms, commission management, and payment processing',
            features: [
                'Vendor onboarding & management',
                'Commission & payout tracking',
                'Order & inventory management',
                'Review & rating systems',
                'Multi-currency support',
                'Analytics dashboard'
            ],
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            icon: Stethoscope,
            title: 'Healthcare Management',
            description: 'Patient management, appointment booking, telemedicine, and health records',
            features: [
                'Patient records management',
                'Appointment scheduling',
                'Telemedicine integration',
                'Prescription management',
                'Billing & insurance',
                'Lab report integration'
            ],
            gradient: 'from-red-500 to-rose-600'
        },
        {
            icon: TrendingUp,
            title: 'Analytics & BI Platforms',
            description: 'Data visualization, business intelligence, and reporting solutions',
            features: [
                'Custom dashboards',
                'Real-time data processing',
                'Advanced reporting',
                'Data visualization',
                'API integrations',
                'Export & scheduling'
            ],
            gradient: 'from-orange-500 to-amber-600'
        },
        {
            icon: Package,
            title: 'Inventory & Supply Chain',
            description: 'Warehouse management, inventory tracking, and supply chain optimization',
            features: [
                'Inventory tracking',
                'Warehouse management',
                'Order fulfillment',
                'Supplier management',
                'Barcode scanning',
                'Stock alerts & forecasting'
            ],
            gradient: 'from-cyan-500 to-blue-600'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                        SaaS Solutions <span className="text-blue-600">We Build</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Industry-specific SaaS platforms tailored to your business domain and user needs
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300"
                            >
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-600 text-base">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="grid grid-cols-2 gap-3">
                                    {solution.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start gap-2"
                                        >
                                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                            </div>
                                            <span className="text-sm text-gray-600 leading-tight">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More About This Solution
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SolutionTypes;
