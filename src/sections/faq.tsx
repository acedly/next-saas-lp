'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'Is Acedly for university students or JAMB students?',
      answer: 'Both. Acedly works for WAEC, JAMB, Post-UTME, and undergrad-level revision.',
    },
    {
      question: 'Do I need a laptop?',
      answer: 'No. Acedly is a mobile-first web app. Works on most smartphones and low-end devices.',
    },
    {
      question: 'Does it require internet?',
      answer: 'Yes, but it\'s optimized to work even on slow or unstable connections.',
    },
    {
      question: 'Is the AI free to use?',
      answer: 'Basic tools like the PDF summarizer and question generator are available under Daily Pass and PRO plans.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. You\'re not locked in. Use the Free plan or pay only when needed.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normale">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}