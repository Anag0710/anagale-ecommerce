import * as React from "react";
import "./globals.css";
import Providers from "@/providers";
import { cn } from "@/lib/utils";
import { font } from "./fonts";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`),
  applicationName: "Anagale",
  keywords: ["nextjs", "reactjs", "ecommerce", "Anag0710"],
  authors: [{ name: "Anag0710", url: "https://github.com/Anag0710" }],
  publisher: "vercel",

  alternates: {
    canonical: "/",
    languages: {
      en: "en",
    },
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: false,
    },
  },

  manifest: `${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.webmanifest`,

  icons: {
    icon: "/assets/images/logo/logo.svg",
    shortcut: "/assets/images/logo/logo.svg",
    apple: "/assets/images/logo/logo.svg",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anagale Shopping Online E-commerce Plateforme",
    description:
      "Anag0710 - Online store selling electronics fashions and more.",
    siteId: "Anagale",
    creator: "Anag0710",
    images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`],
  },

  openGraph: {
    siteName: "Anagale",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    title: "Anagale - Online store",
    description:
      "Anagale- Online store selling electronics fashions and more.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", font.className)}>
        <Providers>{children}</Providers>
        <script type="module"></script>
      </body>
    </html>
  );
}
