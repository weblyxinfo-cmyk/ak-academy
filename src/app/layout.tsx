import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-MH92BBLF";

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
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
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
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
