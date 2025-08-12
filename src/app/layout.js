import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Diamond Forest - Luxury Jewelry & Engagement Rings",
  description: "Design your own ring with our exquisite collection of diamonds, engagement rings, and luxury jewelry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable} antialiased bg-center bg-contain bg-fixed bg-no-repeat`} style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`, backgroundRepeat: 'none'
          }}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
