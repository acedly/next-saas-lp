'use client'

import { Facebook, Github, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const settings = {
  links: [
    { title: 'CBT', href: '/' },
    { title: 'Features', href: '#features' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Support', href: '/' },
    { title: 'Ambassadors', href: '/' },
    { title: 'Contact Us', href: '/' },
  ],
  socialMedia: [
    { title: 'Twitter', icon: Twitter, href: '/' },
    { title: 'Instagram', icon: Instagram, href: '/' },
    { title: 'Linkedin', icon: Linkedin, href: '/' },
    { title: 'Youtube', icon: Youtube, href: '/' },
  ],
  copyright: 'Built by BALX Studio | © 2025 Acedly. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href}>{link.title}</Link>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href}><social.icon /></Link>
        ))}
      </div>

      {/* copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}