'use client'

import { Calendar } from 'lucide-react'
import { siteContent } from '@/data/siteContent'
import { useScheduleModal } from '@/components/ScheduleModal'

export default function Pricing () {
    const { subheading, plans } = siteContent.pricing
    const { open: openSchedule } = useScheduleModal()

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
                            className={`academic-card p-8 text-center academic-hover relative flex flex-col h-full ${plan.popular ? 'border-2 border-academic-gold' : ''}`}
                        >
                            {plan.popular && (
                                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-academic-gold border border-academic-gold rounded-full bg-academic-navy/80 backdrop-blur">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-white mb-4 title-font">{plan.name}</h3>
                            <div className="text-4xl font-bold text-academic-gold mb-4">
                                ${plan.price}
                                <span className="text-lg text-gray-300">{plan.unit}</span>
                            </div>
                            <ul className="space-y-2 mb-6 text-left flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                                        <div className="w-2 h-2 bg-academic-gold rounded-full mr-3 mt-1 flex-shrink-0"></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                data-schedule-trigger
                                onClick={openSchedule}
                                className="mt-auto academic-button w-full px-4 py-3 font-semibold rounded-md flex items-center justify-center space-x-2"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>{plan.cta}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
