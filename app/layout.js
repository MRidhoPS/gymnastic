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
    icon: '/squats.png', // For favicon
    shortcut: '/squats.png', // For shortcut icon
    apple: '/squats.png', // For Apple touch icon
  },
  openGraph: {
    title: 'My App',
    description: 'Track your squats and progress!',
    images: [
      {
        url: '/squats.png', // Open Graph image
        width: 800,
        height: 600,
        alt: 'Squats Icon',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
