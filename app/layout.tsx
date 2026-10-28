import type { Metadata } from "next";
import { DM_Mono, DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emem Oloruntobi | Senior QA Engineer",
  description:
    "Senior QA Engineer building confidence in every release through automation, risk-based testing, and quality engineering.",
  metadataBase: new URL("https://emem-oloruntobi.vercel.app"),
  openGraph: {
    title: "Emem Oloruntobi | Senior QA Engineer",
    description:
      "Quality engineering for reliable releases across payments, APIs, web and mobile applications.",
    type: "website",
    images: [{ url: "/images/emem.jpg", width: 760, height: 1066 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
