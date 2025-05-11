import "./globals.css";
import "@repo/ui/styles.css";
import Wrapper from "@repo/ui/Wrapper";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Quizzify",
  description: "Enter any topic and get instant, personalized quizzes to enhance your learning. Receive detailed analytics and curated resources to fill knowledge gaps.",
  openGraph: {
    title: "Quizzify",
    siteName: "Quizzify",
    url: "https://quizzify.site/",
    description:
      "Enter any topic and get instant, personalized quizzes to enhance your learning. Receive detailed analytics and curated resources to fill knowledge gaps.",
    type: "website",
    images: [
      {
        url: "https://quizzify.site/Quizzify.png",
        width: 1200,
        height: 630,
        alt: "Quizzify Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizzify",
    description:
      "Enter any topic and get instant, personalized quizzes to enhance your learning. Receive detailed analytics and curated resources to fill knowledge gaps.",
    images: ["https://quizzify.site/Quizzify.png"],
    creator: "@AtulGoyal383989"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          {children}
        </Wrapper>
        <Analytics />
      </body>
    </html>
  );
}
