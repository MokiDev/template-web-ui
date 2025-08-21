'use client'

import { CheckCircle } from 'lucide-react'
import { siteContent } from '@/data/siteContent'

export default function Pricing () {
    const { subheading, plans } = siteContent.pricing
    const scheduleUrl = 'https://cal.com/thebayarea/1-hour-session'

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-academic-dark-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 title-font">
                        <span className="text-white">Investment in</span>
                        <span className="block text-gradient">Your Child's Future</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        {subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map(plan => (
                        <div
                            key={plan.id}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden border transform transition-all hover:shadow-xl ${plan.popular ? 'border-academic-gold scale-105 z-10' : 'border-academic-gold/20'}`}
                        >
                            {plan.popular && (
                                <div className="bg-academic-gold text-academic-navy text-center py-1 text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-academic-navy mb-2 title-font">{plan.name}</h3>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-bold text-academic-navy">${plan.price}</span>
                                    <span className="text-gray-600 ml-1">{plan.unit}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-academic-gold mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={scheduleUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 py-3 px-6 text-base bg-academic-gold hover:bg-academic-dark-gold text-white focus:ring-academic-gold w-full block text-center"
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
