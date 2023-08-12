import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Loglib from "@loglib/tracker/react";
import configJSON from "../public/config.json";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: configJSON.metadatatitle.toString(),
  description: configJSON.metadatadescription.toString(),
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
            id: configJSON.loglibid.toString(),
          }}
        />
      </body>
    </html>
  )
}
