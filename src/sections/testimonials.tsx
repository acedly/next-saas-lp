'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const settings = {
  badge: {
    number: 5,
    text: 'STUDENT SUCCESS STORIES',
  },
  title: 'Join Happy Students',
  description: 'Thousands of Nigerian students are already acing their exams with Acedly. See what they have to say about their success stories.',
  testimonials: [
    {
      quote:
        "Acedly is saving me so much time. I use it every day to revise and get my notes summarized before class. CBT mode feels like the real exam.",
      name: "Mary E.",
      designation: "200L Student, UNILORIN",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI summarizer helped me understand complex topics quickly. I went from struggling with Chemistry to scoring 85% in my JAMB mock.",
      name: "Fatima Ibrahim",
      designation: "JAMB Candidate, Kano",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The CBT practice mode is exactly like the real JAMB exam. It helped me get familiar with the interface and timing.",
      name: "Chioma Okeke",
      designation: "SS3 Student, Lagos",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I love how I can upload my lecture notes and get instant summaries. Makes revision so much easier before exams.",
      name: "Emeka Nwosu",
      designation: "300L Student, UI",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Best ₦200 I ever spent! The daily pass gave me unlimited access to all features. Perfect for intensive exam prep.",
      name: "Khadijah Yusuf",
      designation: "Post-UTME Candidate",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}