'use client'

import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.3 }}>
      {children}
    </ReactLenis>
  )
}