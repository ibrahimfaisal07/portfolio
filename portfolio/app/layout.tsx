import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";

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