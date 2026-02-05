import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fira_Code, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIBE CODING 2026 | TANG QUOC MINH | Coding by Intent, Not Syntax",
  description:
    "Transforming vague AI prompts into engineering precision via a structured design review process. A presentation on the future of software development.",
  keywords: ["Vibe Coding", "AI", "OpenSpec", "Gemini", "Software Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body
        className={`${beVietnamPro.variable} ${firaCode.variable} ${cormorantGaramond.variable} font-sans antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
