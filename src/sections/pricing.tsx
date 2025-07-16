'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Simple. Fair. Nigerian.',
  description: 'Flexible pricing that fits your budget. Start free and upgrade when you need more features.',
  plan_1: {
    planName: 'Free',
    price: 0,
    currency: '₦',
    period: '/month',
    description: 'Limited CBT & tools',
    cta: 'Start Free',
    features: [
      '5 CBT challenges per month',
      'Basic past questions',
      'Basic progress tracking',
      'Progress tracking',
      'Basic explanations',
    ]
  },
  plan_2: {
    planName: 'Daily Pass',
    price: 200,
    currency: '₦',
    period: '/day',
    description: 'Full access for 24 hours',
    cta: 'Get Daily Pass',
    features: [
      'Unlimited CBT challenges',
      'All past question banks',
      'AI summarizer & question generator',
      'Detailed explanations',
      'Full library access',
      'XP tracking & streaks',
    ],
    highlighted: true
  },
  plan_3: {
    planName: 'PRO',
    price: 5000,
    currency: '₦',
    period: '/month',
    description: 'All features, no limits',
    cta: 'Upgrade to PRO',
    features: [
      'Everything in Daily Pass',
      'Advanced AI tools',
      'Unlimited PDF uploads',
      'Essay coach (Beta)',
      'Priority support',
      'Advanced progress analytics',
      'Early access to new features',
      '₦50,000/year option available',
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Plan 1 - Free */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full flex flex-col relative">
            {/* Header */}
            <div className="text-left mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <h3 className="text-lg font-semibold text-black">{settings.plan_1.planName}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-bold text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wide">{settings.plan_1.period}</span>
              </div>
              <p className="text-gray-600 text-sm">{settings.plan_1.description}</p>
            </div>

            {/* Features */}
            <div className="flex-1 mb-8">
              <div className="space-y-4">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full" variant="outline" size="lg">{settings.plan_1.cta}</Button>
          </div>
        </SlideEffect>

        {/* Plan 2 - Daily Pass (Highlighted) */}
        <SlideEffect isSpring={false} delay={0.2} className="text-base">
          <div className="bg-white rounded-2xl border-2 border-primary p-8 h-full flex flex-col relative shadow-lg">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="text-xs bg-primary px-4 py-1.5 rounded-full text-white font-medium">Most Popular</div>
            </div>

            {/* Header */}
            <div className="text-left mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-lg font-semibold text-black">{settings.plan_2.planName}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-bold text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wide">{settings.plan_2.period}</span>
              </div>
              <p className="text-gray-600 text-sm">{settings.plan_2.description}</p>
            </div>

            {/* Features */}
            <div className="flex-1 mb-8">
              <div className="space-y-4">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full" size="lg">{settings.plan_2.cta}</Button>
          </div>
        </SlideEffect>

        {/* Plan 3 - Pro Monthly */}
        <SlideEffect isSpring={false} delay={0.3} className="text-base">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full flex flex-col relative">
            {/* Header */}
            <div className="text-left mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <h3 className="text-lg font-semibold text-black">{settings.plan_3.planName}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-bold text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wide">{settings.plan_3.period}</span>
              </div>
              <p className="text-gray-600 text-sm">{settings.plan_3.description}</p>
            </div>

            {/* Features */}
            <div className="flex-1 mb-8">
              <div className="space-y-4">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full" variant="outline" size="lg">{settings.plan_3.cta}</Button>
          </div>
        </SlideEffect>
      </div>
    </div>
  )
}