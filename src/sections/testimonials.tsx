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
        "Helped me prep for my Post-UTME in 2 days! The AI questions were spot-on and the timed practice made me confident during the real exam.",
      name: "Adebayo Ogundimu",
      designation: "Computer Science, University of Lagos",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The leaderboard kept me coming back daily. I went from struggling with Chemistry to scoring 85% in my JAMB mock. Acedly is a game-changer!",
      name: "Fatima Ibrahim",
      designation: "Medicine, Ahmadu Bello University",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "No fluff. Just fire features that work. The offline mode saved me during NEPA strikes, and I could still practice for my WAEC.",
      name: "Chioma Okeke",
      designation: "Engineering, University of Nigeria",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI flashcards and cram sheets are incredible. I can summarize entire topics in minutes and the explanations are so clear.",
      name: "Emeka Nwosu",
      designation: "Law, University of Ibadan",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Best ₦200 I ever spent! The daily pass gave me unlimited practice and I improved my weak subjects before my final exams.",
      name: "Khadijah Yusuf",
      designation: "Pharmacy, University of Ilorin",
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