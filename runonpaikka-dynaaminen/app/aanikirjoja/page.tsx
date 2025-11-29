// app/aanikirjoja/page.tsx

import Link from 'next/link';

export const metadata = {
  title: 'Äänten maailma – Runonpaikka',
};

export default function AanikirjojaPage() {
  return (
    <>
      <section className="page-header">
        <h1>Äänten maailma: Kuuntele ja Koe</h1>
        <p>
          Erikoiskokoelma lisensoituja äänikirjoja ja musiikkia. Maksa kerran, kuuntele ikuisesti.
        </p>
      </section>

      {/* HAKUKENTÄN VISUAALINEN OSA */}
      <section className="search-container">
        <div className="search-box">
          <h4>Hae tekijän tai nimen mukaan</h4>
          {/* HUOM: input ei toimi ilman JavaScriptiä ja taustajärjestelmää */}
          <input type="text" placeholder="Etsi äänikirjoja tai musiikkia..." />
        </div>
      </section>

      {/* UUSI OSIO: Uudet äänikirjat */}
      <h2
        className="section-title"
        style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Uudet äänikirjat
      </h2>
      <section className="audio-grid">
        {/* ÄÄNIKORTTI 1: Tuhansien Hetkien Runo */}
        <div className="audio-card">
          <div className="audio-cover">Kansikuva: Tuhansien Hetkien Runo</div>
          <div className="audio-details">
            <h3>Tuhansien Hetkien Runo (Äänikirja)</h3>
            <p>Lukija: Anssi Mäkelä | Kesto: 3 h 45 min</p>
            <p>
              Syväsukellus suomalaiseen sielunmaisemaan. Tämä teos on saatavilla
              vain Runonpaikan kautta.
            </p>
            <div className="audio-buttons">
              <Link href="#" className="play-button">
                ▶︎ Kuuntele näyte
              </Link>
              <Link href="#" className="purchase-button">
                Osta 14.99 € (Tuleva Maksusivu)
              </Link>
            </div>
          </div>
        </div>

        {/* ÄÄNIKORTTI 2: Uusi Aamu */}
        <div className="audio-card">
          <div className="audio-cover">Kansikuva: Uusi Aamu</div>
          <div className="audio-details">
            <h3>Uusi Aamu (Runoantologia)</h3>
            <p>Lukija: Aino Virtanen | Kesto: 55 min</p>
            <p>Kokoelma lyhyitä, aamun inspiroimia runoja.</p>
            <div className="audio-buttons">
              <Link href="#" className="play-button">
                ▶︎ Kuuntele näyte
              </Link>
              <Link href="#" className="purchase-button">
                Osta 7.50 €
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KOKOELMA: Muut teokset */}
      <h2
        className="section-title"
        style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Kokoelma: Muut teokset
      </h2>
      <section className="audio-grid">
        {/* ÄÄNIKORTTI 3: Talvisia Säveliä */}
        <div className="audio-card">
          <div className="audio-cover">Kansikuva: Talvisia säveliä</div>
          <div className="audio-details">
            <h3>Talvisia Säveliä (Instrumentaali)</h3>
            <p>Esittäjä: Saimi Kulo | Pituus: 42 min</p>
            <p>
              Rauhallinen, kirjallisuuden lukemiseen sopiva instrumentaalimusiikin
              kokoelma. Ei sanoja, vain tunnelmaa.
            </p>
            <div className="audio-buttons">
              <Link href="#" className="play-button">
                ▶︎ Kuuntele näyte
              </Link>
              <Link href="#" className="purchase-button">
                Osta 9.90 € (Tuleva Maksusivu)
              </Link>
            </div>
          </div>
        </div>

        {/* ÄÄNIKORTTI 4: Placeholder */}
        <div className="audio-card">
          <div className="audio-cover">Placeholder: Tila uudelle äänituotteelle</div>
          <div className="audio-details">
            <h3>[Lisää Tuotteen Nimi]</h3>
            <p>Tekijä: [Lisää Nimi] | Kesto: XX min/h</p>
            <p>Lyhyt kuvaus teoksesta ja sen tunnelmasta.</p>
            <div className="audio-buttons">
              <Link href="#" className="play-button">
                ▶︎ Kuuntele näyte
              </Link>
              <Link href="#" className="purchase-button">
                Osta XX.XX €
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}