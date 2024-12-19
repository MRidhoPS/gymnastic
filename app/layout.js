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
  title: "Lidya Aerobic and Zumba",
  description: "Join Lidya Aerobic and Zumba for expert Zumba and aerobic training sessions tailored to your fitness goals. Start your fitness journey today!",
  type: 'website',
  icons: {
    icon: '/squats.png',
    shortcut: '/squats.png',
    apple: '/squats.png',
  },
  openGraph: {
    title: "Lidya Aerobic and Zumba",
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
  keywords: "Zumba, Aerobic, Fitness, Lidya Aerobic and Zumba, Fitness Training",
  author: "Lidya Aerobic and Zumba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Join Lidya Aerobic and Zumba for expert Zumba and aerobic training sessions tailored to your fitness goals. Start your fitness journey today!" />
        <meta name="keywords" content="Zumba, Aerobic, Fitness, Lidya Aerobic and Zumba, Fitness Training" />
        <meta name="author" content="Lidya Aerobic and Zumba" />
        <title>Lidya Aerobic and Zumba</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
