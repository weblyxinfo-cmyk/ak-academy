import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AK BARBERS Academy – Profesionální barber kurzy",
    template: "%s | AK BARBERS Academy",
  },
  description:
    "Profesionální barber kurzy pod vedením zkušených lektorů z AK Barbers. Kurzy pro začátečníky i pokročilé.",
  metadataBase: new URL("https://academy.akbarber.com"),
  openGraph: {
    title: "AK BARBERS Academy",
    description: "Profesionální barber kurzy pod vedením zkušených lektorů z AK Barbers.",
    url: "https://academy.akbarber.com",
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
