import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Instuktur Zumba Aerobic Jakarta",
  description: "Temukan Instruktur Zumba Aerobic Jakarta profesional untuk kelas menyenangkan dan bugar bersama Lidya! Sebagai Instruktur Zumba Jakarta berpengalaman, Lidya menawarkan sesi Senam Aerobic Jakarta yang energik dan seru. Bergabunglah dalam komunitas Zumba Jakarta untuk gaya hidup sehat dan aktif. Cari tahu jadwal Senam Jakarta dengan Lidya, Lidya Zumba Jakarta dan Lidya Aerobic Jakarta untuk pengalaman senam terbaik!",
  type: 'website',
  icons: {
    icon: '/squats.png',
    shortcut: '/squats.png',
    apple: '/squats.png',
  },
  openGraph: {
    title: "Instuktur Zumba Aerobic Jakarta",
    description: "Temukan Instruktur Zumba Aerobic Jakarta profesional untuk kelas menyenangkan dan bugar bersama Lidya! Sebagai Instruktur Zumba Jakarta berpengalaman, Lidya menawarkan sesi Senam Aerobic Jakarta yang energik dan seru. Bergabunglah dalam komunitas Zumba Jakarta untuk gaya hidup sehat dan aktif. Cari tahu jadwal Senam Jakarta dengan Lidya, Lidya Zumba Jakarta dan Lidya Aerobic Jakarta untuk pengalaman senam terbaik!",
    images: [
      {
        url: '/squats.png',
        width: 800,
        height: 600,
        alt: 'Squats Icon',
      },
    ],
  },
  keywords: "Instruktur Zumba Jakarta, Senam Aerobic Jakarta, Zumba Jakarta, Senam Jakarta, Lidya Zumba Jakarta, Lidya Aerobic Jakarta",
  author: "Lidya Aerobic and Zumba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta name="google-site-verification" content="4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:url" content="https://instukturzumbaaerobikjakarta.vercel.app/" />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}