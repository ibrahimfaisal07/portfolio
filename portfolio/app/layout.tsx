import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ibrahim Faisal | Software Engineer',
  description: 'Full-stack software engineer specializing in custom engines, modern web applications, and backend architecture.',
  openGraph: {
    title: 'Ibrahim Faisal | Software Engineer',
    description: 'Selected work in software engineering and application architecture.',
    url: 'https://your-domain.com', // Update this when you deploy!
    siteName: 'Ibrahim Faisal',
    images: [
      {
        url: '/og-image.png', // Take a screenshot of your hero section and save it as og-image.png in your public folder!
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        {/* Our new client-side Navbar component */}
        <Navbar />

        {/* The current page content renders here */}
        {children}
        

        <Footer />
      </body>
    </html>
  );
}