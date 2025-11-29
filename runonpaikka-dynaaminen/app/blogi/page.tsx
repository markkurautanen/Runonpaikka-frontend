// app/blogi/page.tsx

import Link from 'next/link';

export const metadata = {
  title: 'Blogi & Yhteisö – Runonpaikka',
};

export default function BlogiPage() {
  return (
    <>
      <section className="page-header">
        <h1>Yhteisö ja Kirjallisuusblogi</h1>
        <p>
          Lue artikkeleita kirjailijoilta, osallistu keskusteluun ja jaa omat
          ajatuksesi.
        </p>
      </section>

      {/* BLOGIARTIKKELIEN LISTAUS */}
      <h2
        className="section-title"
        style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Uusimmat Blogiartikkelit
      </h2>
      <section className="blog-list">
        <Link href="#">
          <div className="blog-article-card">
            <h3>Runojen Rakenne: Mistä Hyvä Runo Syntyy?</h3>
            <div className="blog-meta">
              <span>Kirjoittaja: Lyyra A.</span>
              <span>Päivämäärä: 2025-11-29</span>
              <span>Aihe: Kirjoittaminen</span>
            </div>
            <p>
              Syväanalyysi suomalaisen runouden rytmistä ja riimistä. Mitä me
              voimme oppia klassikoilta?
            </p>
          </div>
        </Link>

        <Link href="#">
          <div className="blog-article-card">
            <h3>Viisi Syksyn Parasta Äänikirjaa</h3>
            <div className="blog-meta">
              <span>Kirjoittaja: Toimitus</span>
              <span>Päivämäärä: 2025-11-20</span>
              <span>Aihe: Suositukset</span>
            </div>
            <p>
              Kaikki, mitä sinun tarvitsee tietää tämän syksyn kuumimmista
              äänikirjajulkaisuista ja miksi ne kannattaa kuunnella.
            </p>
          </div>
        </Link>

        <Link href="#">
          <div className="blog-article-card">
            <h3>Haastattelu: Kirjailija Juhani Niemi</h3>
            <div className="blog-meta">
              <span>Kirjoittaja: Elias K.</span>
              <span>Päivämäärä: 2025-11-15</span>
              <span>Aihe: Haastattelut</span>
            </div>
            <p>
              Keskustelimme Juhani Niemen kanssa hänen uudesta
              mysteeriromaanistaan &quot;Metsän Kuiskaus&quot;.
            </p>
          </div>
        </Link>
      </section>

      {/* KESKUSTELUFOORUMIN ESITARKASTELU */}
      <h2
        className="section-title"
        style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Aktiiviset keskusteluketjut
      </h2>
      <section className="forum-teaser">
        <h2>Keskustelupalsta</h2>
        <ul className="topic-list">
          <li>
            <Link href="#">
              Kuukausittainen runoilijaesittely (3 uutta kommenttia)
            </Link>
          </li>
          <li>
            <Link href="#">Mitä luet juuri nyt? (52 kommenttia)</Link>
          </li>
          <li>
            <Link href="#">Apua: Runon julkaiseminen digitaalisesti (8 kommenttia)</Link>
          </li>
          <li>
            <Link href="#">
              Instrumentaalimusiikin vaikutus lukukokemukseen (15 kommenttia)
            </Link>
          </li>
        </ul>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link
            href="#"
            style={{
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Katso kaikki keskustelut →
          </Link>
        </p>
      </section>
    </>
  );
}