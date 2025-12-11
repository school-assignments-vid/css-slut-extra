import "./style.css";

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <h2 className="nav__brand">Firma A/S</h2>

        <ul className="nav__list">
          <li className="nav__item nav__item--active">
            <a className="nav__link" href="#">
              Home - jeg er lidt speciel
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              Produkter
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
