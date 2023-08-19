import "../../globals.css";
import type { Metadata } from "next";
import configJSON from "../../../public/config.json";

export const metadata: Metadata = {
  metadataBase: new URL(configJSON.website.toString()),
  title: "testing link previews",
  description: "this would be the description db xd",
  openGraph: {
    title: "testing link previews",
    description: "this would be the description db xd",
    siteName: "testing link previews",
    images: [
      {
        url: `/og?title=${"testing link previews"}`,
        width: 800,
        height: 600,
      },
      {
        url: `/og?title=${"testing link previews"}`,
        width: 1600,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
