import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ServiceWorkerCleanup } from '@/components/service-worker-cleanup'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fesko Driving School - Professional Driver Training',
  description: 'Learn to drive with confidence at Fesko Driving School. Expert instructors, comprehensive courses, and a proven track record of success.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: '/placeholder-logo.svg',
    apple: '/placeholder-logo.svg',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geist.className} ${_geistMono.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorkerCleanup />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
