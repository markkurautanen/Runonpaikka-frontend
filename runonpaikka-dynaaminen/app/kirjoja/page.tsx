// app/kirjoja/page.tsx

import Link from 'next/link';

export const metadata = {
  title: 'Kirjat – Runonpaikka',
};

export default function KirjatPage() {
  return (
    <>
      <section className="page-header">
        <h1>Kirjat: Löydä seuraava lukuelämyksesi</h1>
        <p>
          Romaanit, antologiat ja teokset kovakantisina tai e-kirjoina suoraan kirjailijoilta.
        </p>
      </section>

      <section className="product-grid">
        {/* TUOTEKORTTI 1 */}
        <div className="book-card">
          <div className="book-image">Kansi: Runouden Valtameri</div>
          <h3>Runouden Valtameri</h3>
          <p>
            Kirjailija: Eeva Virtanen. Kokoelma syviä, tunteikkaita runoja suoraan
            sielusta.
          </p>
          <div className="price">24.90 €</div>
          <Link href="/kauppa" className="buy-button">
            Osta verkkokaupasta
          </Link>
        </div>

        {/* TUOTEKORTTI 2 */}
        <div className="book-card">
          <div className="book-image">Kansi: Metsän Kuiskaus</div>
          <h3>Metsän Kuiskaus</h3>
          <p>
            Kirjailija: Juhani Niemi. Jännittävä mysteeriromaani Pohjois-Suomen
            karuista maisemista.
          </p>
          <div className="price">32.00 €</div>
          <Link href="/kauppa" className="buy-button">
            Osta verkkokaupasta
          </Link>
        </div>

        {/* TUOTEKORTTI 3 */}
        <div className="book-card">
          <div className="book-image">Kansi: Talven Tarinat</div>
          <h3>Talven Tarinat</h3>
          <p>
            Antologia, joka kokoaa yhteen 12 nousevaa runoilijaa. Kovakantinen
            erikoispainos.
          </p>
          <div className="price">19.50 €</div>
          <Link href="/kauppa" className="buy-button">
            Osta verkkokaupasta
          </Link>
        </div>

        {/* TUOTEKORTTI 4 */}
        <div className="book-card">
          <div className="book-image">Placeholder: Uusi teos</div>
          <h3>[Lisää Uusi Teos]</h3>
          <p>Kuvaus tuotteesta, kirjailijasta ja julkaisuvuodesta.</p>
          <div className="price">XX.XX €</div>
          <Link href="/kauppa" className="buy-button">
            Osta verkkokaupasta
          </Link>
        </div>
      </section>
    </>
  );
}