'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  badge: {
    number: 2,
    text: 'AI-POWERED STUDY TOOLS',
  },
  title: 'Turn Notes into Study Gold',
  description: 'Upload your PDFs or lecture notes — Acedly\'s AI tools turn them into clean summaries and practice questions. Save time. Focus on understanding.',
  card_1: {
    title: 'PDF Explainer & Summarizer',
    content: 'Upload any PDF or document and get instant, clean summaries that highlight the key points you need to know.',
  },
  card_2: {
    title: 'AI Question Generator',
    content: 'Transform your notes into practice questions automatically. Create CBT from your own study materials.',
  },
  card_3: {
    title: 'Essay/Letter Coach (Beta)',
    content: 'Get AI-powered feedback on your essays and formal letters to improve your writing skills.',
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
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
        <SlideEffect direction="left" delay={0.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>
  )
}