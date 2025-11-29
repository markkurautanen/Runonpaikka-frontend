// components/Header.js

import Link from 'next/link'; // Tuo Next.js Link-komponentti

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">Runonpaikka</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/runoja">Runoja</Link>
          </li>
          <li>
            <Link href="/kirjoja">Kirjoja</Link>
          </li>
          <li>
            <Link href="/aanikirjoja">Äänikirjoja</Link>
          </li>
          <li>
            <Link href="/kauppa">Kauppa</Link>
          </li>
          <li>
            <Link href="/blogi">Blogi / Keskustelu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}