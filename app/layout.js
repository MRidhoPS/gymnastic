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
  title: "Instuktur Zumba Aerobic Jakara",
  description: "Join Lidya Aerobic and Zumba for expert Zumba and aerobic training sessions tailored to your fitness goals. Start your fitness journey today!",
  type: 'website',
  icons: {
    icon: '/squats.png',
    shortcut: '/squats.png',
    apple: '/squats.png',
  },
  openGraph: {
    title: "Instuktur Zumba Aerobic Jakara",
    description: "Join Lidya Aerobic and Zumba for expert Zumba and aerobic training sessions tailored to your fitness goals. Start your fitness journey today!",
    images: [
      {
        url: '/squats.png',
        width: 800,
        height: 600,
        alt: 'Squats Icon',
      },
    ],
  },
  // keywords: "Zumba, Aerobic, Fitness, Lidya Aerobic and Zumba, Fitness Training, Instruktur Zumba Jakarta, instruktur jakarta, Zumba Aerobic Jakarta, Instruktur Senam Jakarta, Instruktur Zumba Aerobic Jakarta, Senam Jakarta, Senam Aerobic Jakarta, Senam Zumba Jakarta, Zumba Jakarta, Aerobic Jakarta, Senam Aerobic Zumba Jakarta, Senam Aerobic Zumba, Senam Aerobic, Senam Zumba, Senam, Aerobic, Zumba, Jakarta, Lidya Aerobic and Zumba, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya, Aerobic and Zumba, Aerobic and Zumba Jakarta, Aerobic and Zumba, Aerobic, Zumba, Jakarta, Lidya Aerobic, Lidya Zumba, Lidya",
  keywords: "Instruktur Zumba Jakarta, Senam Aerobic Jakarta, Zumba Jakarta, Tempat Senam di Jakarta, Senam Jakarta, Lidya Zumba Jakarta, Lidya Aerobic Jakarta",
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
        {/* <meta name="google-site-verification" content="googlec0ca832322086f5b.html" /> */}
        <meta name="google-site-verification" content="4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:url" content="https://gymnastic-a65e.vercel.app/" />
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