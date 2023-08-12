import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Loglib from "@loglib/tracker/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DBlogs',
  description: 'A collection of notes and journals written by Dagmawi Babi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Loglib
          config={{
            id: "blog_dagmawibabi",
          }}
        />
      </body>
    </html>
  )
}
