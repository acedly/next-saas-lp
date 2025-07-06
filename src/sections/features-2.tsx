'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 2,
    text: 'FOR STUDENTS BY STUDENTS',
  },
  title: 'Built for Nigerian Students',
  description: 'Adaptive for all major Nigerian exams with department-level filtering, offline-first experience, and flexible micro-unlocks that fit your budget.',
  card_1: {
    title: 'Adaptive for All Exams',
    content: 'Comprehensive coverage for WAEC, JAMB, NECO, Post-UTME with department-level filtering to match your specific course requirements.',
  },
  card_2: {
    title: 'Offline-First PWA',
    content: 'Study anywhere, anytime! Our Progressive Web App would works seamlessly offline, so poor internet never stops your progress.',
  },
}

export default function Features2() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p>{settings.card_1.content}</p>
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}