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
      question: 'Is Acedly free to use?',
      answer: 'Yes! Acedly offers 5 free CBT challenges per month. You can upgrade to a daily pass (₦200) for unlimited access or go Pro (₦2,000/month) for the full AI ecosystem.',
    },
    {
      question: 'Can I use Acedly without internet?',
      answer: 'Absolutely! Acedly is a Progressive Web App (PWA) that works offline. Download questions when you have internet, then practice anywhere without connectivity.',
    },
    {
      question: 'Does Acedly cover WAEC, JAMB, and Post-UTME?',
      answer: 'Yes! Acedly covers all major Nigerian exams including WAEC, JAMB, NECO, and Post-UTME with department-specific filtering for your course requirements.',
    },
    {
      question: 'What\'s the difference between Free and Pro?',
      answer: 'Free gives you 5 challenges monthly with basic features. Pro unlocks unlimited challenges, AI tools (summarizer, flashcards), smart planner, PDF tools, and advanced analytics.',
    },
    {
      question: 'Can I refer my friends and get free access?',
      answer: 'Yes! Our referral program gives you free challenges when friends sign up. Successful referrals can unlock daily passes and Pro features.',
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