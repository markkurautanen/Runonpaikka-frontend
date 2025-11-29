// app/page.tsx (KORVAA KAIKEN SISÄLLÖN)

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Runonpaikka – Sielun ja Sanojen Koti.</h1>
        <p>
          Löydä syvyys, jaa tarinasi. Runous, kirjallisuus ja musiikki kohtaavat tässä digitaalisessa pimeässä. Tervetuloa
          lukemaan, kuuntelemaan ja luomaan.
        </p>
      </section>

      <section className="sections">
        <h2>Tutustu runonpaikkaan</h2>
        <div className="section-grid">
          {/* 1. Runot (Linkitetty) */}
          <Link href="/runoja">
            <div className="card">
              <h3>Runot</h3>
              <p>
                Selaa ja löydä tuhansia runoja klassikoilta ja uusilta kyvyiltä. Jaa oma runosi lukijoiden kesken.
              </p>
            </div>
          </Link>

          {/* 2. Kirjat (Linkitetty) */}
          <Link href="/kirjoja">
            <div className="card">
              <h3>Kirjat</h3>
              <p>Romaanit, antologiat ja teokset kovakantisina tai e-kirjoina suoraan kirjailijoilta.</p>
            </div>
          </Link>

          {/* 3. Äänten maailma (Linkitetty) */}
          <Link href="/aanikirjoja">
            <div className="card">
              <h3>Äänten maailma</h3>
              <p>
                Kuuntele äänikirjoja ja uniikkeja musiikkikappaleita, jotka on luotu kirjallisuuden inspiroimana.
              </p>
            </div>
          </Link>

          {/* 4. Verkkokauppa (Linkitetty) */}
          <Link href="/kauppa">
            <div className="card">
              <h3>Verkkokauppa</h3>
              <p>Tukesi kirjailijoille. Osta teoksia, musiikkia ja taidetta suoraan tekijöiltä.</p>
            </div>
          </Link>

          {/* 5. Yhteisö ja blogi (Linkitetty) */}
          <Link href="/blogi">
            <div className="card">
              <h3>Yhteisö ja blogi</h3>
              <p>
                Keskustele, kommentoi ja luo omia artikkeleitasi. Kirjallisuuden ystävien kohtaamispaikka.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}