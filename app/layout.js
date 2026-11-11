import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });

const SITE_URL = "https://www.zumbajakarta.com";
const TITLE = "Instruktur Zumba & Senam Aerobik di Jakarta | Lidya Zumba";
const DESCRIPTION =
  "Kelas Zumba, aerobik, SKJ, dan senam kreasi di Jakarta bersama instruktur bersertifikat. Seru, sehat, cocok untuk pemula. Hubungi via WhatsApp!";
const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Lidya Rachmawati, instruktur Zumba dan aerobik di Jakarta" };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Lidya Rachmawati" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: "/",
    siteName: "Lidya Zumba Jakarta", locale: "id_ID", type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Lidya Zumba Jakarta",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+6281288025956",
  areaServed: { "@type": "City", name: "Jakarta" },
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={playfair.variable}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <SpeedInsights />
      </body>
    </html>
  );
}