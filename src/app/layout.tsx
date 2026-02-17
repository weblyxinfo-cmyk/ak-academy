import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AK BARBERS Academy – Profesionální barber kurzy v Praze a ČR",
    template: "%s | AK BARBERS Academy",
  },
  description:
    "Barber kurzy od 4 999 Kč pod vedením lektorů z AK Barbers. Měsíční, 2týdenní i 1denní kurzy v Praze, Plzni, Berouně a Slaném. Certifikát + praxe. Přihlaste se.",
  metadataBase: new URL("https://barber-kurzy.com"),
  openGraph: {
    title: "AK BARBERS Academy – Profesionální barber kurzy",
    description: "Barber kurzy od 4 999 Kč pod vedením lektorů z AK Barbers. Kurzy v Praze, Plzni, Berouně a Slaném. Certifikát + praxe. Přihlaste se.",
    url: "https://barber-kurzy.com",
    siteName: "AK BARBERS Academy",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK BARBERS Academy – Profesionální barber kurzy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://barber-kurzy.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
