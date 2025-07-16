'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const settings = {
  badge: {
    number: 1,
    text: 'CBT CHALLENGE MODE',
  },
  title: 'Practice Past Questions Like a Pro',
  description: 'Sharpen your exam skills with our fast, gamified CBT system. Practice by subject or topic, track your scores, and compete with yourself.',
  card_1: {
    title: 'Real Past Questions',
    content: 'Access comprehensive past question banks for WAEC, JAMB, NECO, and Post-UTME with authentic exam questions.',
    carousel_images: [
      'https://i0.wp.com/kwarastate.gov.ng/wp-content/uploads/unilorin-logo.jpeg',
      'https://carissahillsinternationalschools.sch.ng/wp-content/uploads/2024/11/waec-logo.png',
      'https://w7.pngwing.com/pngs/1003/996/png-transparent-university-of-lagos-university-of-ibadan-federal-university-of-technology-owerri-university-of-ilorin-student-text-people-logo-thumbnail.png',
      'https://carissahillsinternationalschools.sch.ng/wp-content/uploads/2024/11/nerdc__1_-removebg-preview.png',
      'https://www.uniport.edu.ng/wp-content/themes/unipix/assets/images/logo/uniport_logo.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TS-1vYJs36NX0pbAgnPROXNBpXlSA1wDzg&s',
      'https://myschoolportal.net/blog/wp-content/uploads/2024/11/university-of-nigeria-logo-transparent.png',
      'https://myschoolportal.net/blog/wp-content/uploads/2024/11/university-of-ibadan-logo-transparent.png',
    ]
  },
  card_2: {
    title: 'Instant Results & Accuracy Stats',
    content: 'Get immediate feedback on your performance with detailed accuracy statistics and progress tracking.'
  },
  card_3: {
    title: 'Practice Streaks + XP System',
    content: 'Build consistent study habits with streak tracking and earn XP points for every practice session completed.'
  },
  card_4: {
    title: 'Subject Filters and Random Mode',
    content: 'Practice by specific subjects or topics, or challenge yourself with random questions across all subjects.',
    cta: {
      content: 'Practice CBT Now',
      href: '#'
    }
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Carousel images={settings.card_1.carousel_images} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        {/* card 4 */}
        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <div className="space-y-3 md:space-y-5 mb-6">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_4.title}</h3>
              <p>{settings.card_4.content}</p>
            </div>
            <Link href={settings.card_4.cta.href}>
              <Button variant="accent">{settings.card_4.cta.content}</Button>
            </Link>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}