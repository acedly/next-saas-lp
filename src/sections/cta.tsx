'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  title: 'Start Practicing Smarter. Right Now.',
  description: 'Join thousands of Nigerian students who are already acing their exams with Acedly\'s AI-powered CBT challenges.',
  CTA: {
    content: 'Launch CBT Challenge',
    href: '#'
  },
  secondaryCTA: {
    content: 'Join Acedly Waitlist',
    href: '#'
  }
}

export default function CTA() {
  return (
    <SlideEffect isSpring={false} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-secondary">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</p>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <Link href={settings.CTA.href}>
          <Button className="w-full md:w-auto" size='lg'>{settings.CTA.content}</Button>
        </Link>
        <Link href={settings.secondaryCTA.href}>
          <Button className="w-full md:w-auto" size='lg' variant='secondary'>{settings.secondaryCTA.content}</Button>
        </Link>
      </div>
    </SlideEffect>
  )
}