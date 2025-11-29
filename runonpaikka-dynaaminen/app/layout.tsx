// app/layout.js (KORJATTU VERSIO)

import './global.css'; // Tuo style.css (nimetty global.css:ksi)
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Täällä määritellään sivun otsikko, kuvaus jne. (korvaa head-tagin)
export const metadata = {
  title: 'Runonpaikka – Sielun ja Sanojen Koti',
  description: 'Runous, kirjallisuus ja musiikki kohtaavat. Tervetuloa lukemaan, kuuntelemaan ja luomaan.',
};

export default function RootLayout({ children }) {
  return (
    // HUOM: Varmista, että <html> ja <body> ovat tässä!
    <html lang="fi">
      {/* <head>-tagi on poistettu TÄSTÄ, jotta Next.js voi hallita sen automaattisesti */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}