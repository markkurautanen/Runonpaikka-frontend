// app/kauppa/page.tsx

import Link from 'next/link';

export const metadata = {
  title: 'Verkkokauppa – Runonpaikka',
};

export default function KauppaPage() {
  return (
    <>
      <section className="page-header">
        <h1>Runonpaikan Verkkokauppa</h1>
        <p>
          Tässä kaupassa voit tukea suoraan kirjailijoita ja taiteilijoita.
          Kaikki maksut käsitellään turvallisesti Stripen kautta.
        </p>
      </section>

      {/* KIRJAT-OSIO */}
      <h2 className="section-title">Painetut teokset ja E-kirjat</h2>
      <section className="product-grid">
        {/* TUOTEKORTTI: Runouden Valtameri (Kirja) */}
        <div className="book-card">
          <div className="book-image">Kansi: Runouden Valtameri</div>
          <h3>Runouden Valtameri</h3>
          <p>
            Kirjailija: Eeva Virtanen. Kokoelma syviä, tunteikkaita runoja suoraan
            sielusta.
          </p>
          <div className="price">24.90 €</div>
          {/* TÄMÄ ON TULEVA STRIPE-INTEGRAATIOKOHTA */}
          <Link href="#" className="buy-button">
            Lisää ostoskoriin (Stripe-placeholder)
          </Link>
        </div>

        {/* TUOTEKORTTI: Metsän Kuiskaus (Kirja) */}
        <div className="book-card">
          <div className="book-image">Kansi: Metsän Kuiskaus</div>
          <h3>Metsän Kuiskaus</h3>
          <p>
            Kirjailija: Juhani Niemi. Jännittävä mysteeriromaani Pohjois-Suomen
            karuista maisemista.
          </p>
          <div className="price">32.00 €</div>
          <Link href="#" className="buy-button">
            Lisää ostoskoriin (Stripe-placeholder)
          </Link>
        </div>

        {/* TUOTEKORTTI: Talven Tarinat (Kirja) */}
        <div className="book-card">
          <div className="book-image">Kansi: Talven Tarinat</div>
          <h3>Talven Tarinat</h3>
          <p>Antologia, joka kokoaa yhteen 12 nousevaa runoilijaa.</p>
          <div className="price">19.50 €</div>
          <Link href="#" className="buy-button">
            Lisää ostoskoriin (Stripe-placeholder)
          </Link>
        </div>
      </section>

      {/* ÄÄNISÄLLÖT-OSIO */}
      <h2 className="section-title">Äänikirjat ja Musiikki</h2>
      <section className="product-grid">
        {/* TUOTEKORTTI: Tuhansien Hetkien Runo (Ääni) */}
        <div className="book-card">
          <div className="book-image">Ääni: Tuhansien Hetkien Runo</div>
          <h3>Tuhansien Hetkien Runo (Ääni)</h3>
          <p>
            Lukija: Anssi Mäkelä. Syväsukellus suomalaiseen sielunmaisemaan.
            Digitaalinen lataus.
          </p>
          <div className="price">14.99 €</div>
          <Link href="#" className="buy-button">
            Osta heti (Stripe-placeholder)
          </Link>
        </div>

        {/* TUOTEKORTTI: Talvisia Säveliä (Ääni) */}
        <div className="book-card">
          <div className="book-image">Ääni: Talvisia säveliä</div>
          <h3>Talvisia Säveliä (Instrumentaali)</h3>
          <p>
            Esittäjä: Saimi Kulo. Rauhallinen instrumentaalimusiikin kokoelma.
            Digitaalinen lataus.
          </p>
          <div className="price">9.90 €</div>
          <Link href="#" className="buy-button">
            Osta heti (Stripe-placeholder)
          </Link>
        </div>

        {/* TILA UUDELLE TUOTTEELLE */}
        <div className="book-card">
          <div className="book-image">Placeholder: Uusi Tuote</div>
          <h3>[Lisää uusi tuote]</h3>
          <p>Kuvaus tuotteesta, tekijästä ja toimitustavasta.</p>
          <div className="price">XX.XX €</div>
          <Link href="#" className="buy-button">
            Lisää ostoskoriin
          </Link>
        </div>
      </section>
    </>
  );
}