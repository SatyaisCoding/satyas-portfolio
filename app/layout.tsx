import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "../context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import BuyCoffee from "@/components/BuyCoffee";
import ThemeSwitch from "@/components/theme-switch";
import AnimatedBackground from "@/components/animated-background";
import Analytics from "@/components/analytics";
import StructuredData from "@/components/structured-data";
import AICopilot from "@/components/ai-copilot";
import WelcomeModal from "@/components/welcome-modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Satya Prakash | Full-Stack Developer Portfolio",
  description:
    "Satya Prakash is a passionate Full-Stack Developer specializing in MERN Stack and Next.js. Building modern web applications with AI integrations and scalable SaaS platforms.",
  keywords: ["Full-Stack Developer", "MERN Stack", "Next.js", "React", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Satya Prakash" }],
  creator: "Satya Prakash",
  openGraph: {
    title: "Satya Prakash | Full-Stack Developer",
    description: "Passionate Full-Stack Developer specializing in MERN Stack and Next.js",
    url: "https://satyaprakash.dev",
    siteName: "Satya Prakash Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satya Prakash | Full-Stack Developer",
    description: "Passionate Full-Stack Developer specializing in MERN Stack and Next.js",
    creator: "@SatyaisCoding",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${inter.className} text-gray-950 relative dark:text-gray-50 dark:text-opacity-90 antialiased overflow-x-hidden`}
      >
        <StructuredData />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Analytics />
            <AnimatedBackground />
            <Header />
            {children}
            <Footer />
            <Toaster 
              position="bottom-right" 
              reverseOrder={false}
              toastOptions={{
                duration: 3000,
                style: {
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1f2937',
                  backdropFilter: 'blur(10px)',
                },
              }}
            />
            <BuyCoffee />
            <ThemeSwitch/>
            <AICopilot />
            <WelcomeModal />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
