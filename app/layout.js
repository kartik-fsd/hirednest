import "./globals.css";
import Navbar from "@/components/header/page";
import Footer from "@/components/footer/page";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export const metadata = {
  title: {
    default: "Hired Nest | Your Professional Job Search Platform",
    template: "%s | Hired Nest"
  },
  description: "Hired Nest helps you find your dream job with AI-powered job matching, professional networking, and career development tools. Join thousands of successful job seekers.",
  keywords: [
    "job search",
    "career platform",
    "professional networking",
    "job matching",
    "career development",
    "hiring platform",
    "recruitment",
    "job portal"
  ],
  authors: [{ name: "Hired Nest" }],
  creator: "Hired Nest",
  publisher: "Hired Nest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hirednest.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    title: 'Hired Nest | Your Professional Job Search Platform',
    description: 'Find your dream job with AI-powered job matching and career development tools',
    url: 'https://hirednest.com',
    siteName: 'Hired Nest',
    images: [
      {
        url: '/og-image.png', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Hired Nest Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hired Nest | Your Professional Job Search Platform',
    description: 'Find your dream job with AI-powered job matching and career development tools',
    creator: 'kartik shettar', // Add your Twitter handle
    images: ['/twitter-image.png'], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}