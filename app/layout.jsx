import './globals.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

export const metadata = {
  title: 'PacificVis 2027',
  description:
    'The 20th IEEE Pacific Visualization Conference (PacificVis 2027), April 19-22, 2027, in Busan, South Korea.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  keywords: [
    'PacificVis 2027',
    'Pacific Visualization 2027',
    'IEEE PacificVis',
    'Busan',
    'South Korea',
    'Visualization',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Header />
        <Banner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
