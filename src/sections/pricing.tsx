'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Pay Once, Win More.',
  description: 'Flexible pricing that fits your budget. Start free and upgrade when you\'re ready to unlock the full power of AI-driven studying.',
  plan_1: {
    planName: 'Free',
    price: 0,
    currency: '₦',
    description: 'Perfect for trying out Acedly and light practice sessions.',
    cta: 'Get Started Free',
    features: [
      '5 CBT challenges per month',
      'Basic past questions',
      'Leaderboard access',
      'Progress tracking',
      'Offline mode',
      'Basic explanations',
    ]
  },
  plan_2: {
    planName: 'Daily Pass',
    price: 200,
    currency: '₦',
    description: 'Unlimited access for intensive study sessions.',
    cta: 'Get Daily Pass',
    features: [
      'Unlimited CBT challenges',
      'AI-generated questions',
      'All past question banks',
      'Detailed explanations',
      'Timed practice modes',
      'Duel with friends',
      'Advanced analytics',
      'Priority support',
    ]
  },
  plan_3: {
    planName: 'Pro Monthly',
    price: 2000,
    currency: '₦',
    description: 'Full ecosystem access with all AI tools and features.',
    cta: 'Go Pro',
    features: [
      'Everything in Daily Pass',
      'AI Tools Lab (summarizer, flashcards)',
      'Smart study planner',
      'PDF tools & generators',
      'Custom study packs',
      'Wellness reminders',
      'Advanced progress analytics',
      'Early access to new features',
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white border border-border">
            <div className="capitalize text-start text-black">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full" variant="outline">{settings.plan_1.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-accent" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary border-2 border-secondary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="text-xs bg-primary px-3 py-1 rounded-full text-background font-medium">Most Popular</div>
            </div>
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black">{settings.plan_2.planName}</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm">/day</span>
            </div>
            <Button className="w-full">{settings.plan_2.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-accent" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white border border-border">
            <div className="capitalize text-start text-black">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full" variant="outline">{settings.plan_3.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-accent" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}