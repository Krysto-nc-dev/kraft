import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/providers/theme-provider'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artly || Gestion des artisans',
  description: 'Artly - Logiciel de caisse en ligne, gestion des revendeurs, facturation, gestion des stocks pour les artisans.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Ajoutez ici d'autres balises <head> si nécessaire */}
      </head>
      <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
     
  )
}
