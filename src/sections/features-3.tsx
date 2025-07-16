'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  badge: {
    number: 3,
    text: 'ORGANIZED STUDY LIBRARY',
  },
  title: 'All Your Materials, One Clean Library',
  description: 'No more scattered notes. Find exactly what you need — by subject, exam, or topic.',
  card_1: {
    title: 'WAEC & JAMB Syllabi',
    content: 'Access complete syllabi for all major Nigerian exams, organized by subject and topic.',
  },
  card_2: {
    title: 'Flashcards and Cram Sheets',
    content: 'Quick-reference materials and flashcards for last-minute revision and memory reinforcement.',
  },
  card_3: {
    title: 'Downloadable Guides',
    content: 'Download study guides and materials for offline access, organized by topic-based structure.',
  },
  cta: {
    content: 'Explore Library',
    href: '#'
  },
}

export default function Features3() {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p>{settings.card_1.content}</p>
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="top" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="top" delay={0.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>

      {/* CTA */}
      <SlideEffect className="text-center">
        <Link href={settings.cta.href}>
          <Button size="lg">{settings.cta.content}</Button>
        </Link>
      </SlideEffect>
    </div>
  )
}