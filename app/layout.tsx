import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Loglib from "@loglib/tracker/react";
import configJSON from "../public/config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(configJSON.website.toString()),
  title: configJSON.metadatatitle.toString(),
  description: configJSON.metadatadescription.toString(),
  openGraph: {
    title: configJSON.metadatatitle.toString(),
    description: configJSON.metadatadescription.toString(),
    siteName: configJSON.metadatatitle.toString(),
    images: [
      {
        url: `/og?title=${configJSON.metadatatitle.toString()}`,
        width: 800,
        height: 600,
      },
      {
        url: `/og?title=${configJSON.metadatatitle.toString()}`,
        width: 1600,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
