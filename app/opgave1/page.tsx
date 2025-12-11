import "./style.scss";

export default function Page() {
  return (
    <main className="grid place-content-center min-h-screen bg-[rgb(238,238,238)] p-48">
      <div className="grid grid-cols-2 gap-8">
        <div className="card">
          <span className="card__img"></span>
          <div className="card__content">
            <ul className="card__list">
              <li className="card__item card__item--active">Adobe XD</li>
              <li className="card__item">Figma</li>
              <li className="card__item">Sketch</li>
            </ul>
            <p className="card__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              atque iste nobis quidem dolore error animi voluptas quia corrupti
              consectetur.
            </p>
            <a className="card__link" href="#">
              Visit the link
            </a>
            <a className="card__link--red" href="#">
              Visit the link
            </a>
          </div>
        </div>

        <div className="card card--dark">
          <span className="card__img"></span>
          <div className="card__content">
            <ul className="card__list">
              <li className="card__item card__item--active">Adobe XD</li>
              <li className="card__item">Figma</li>
              <li className="card__item">Sketch</li>
            </ul>
            <p className="card__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              atque iste nobis quidem dolore error animi voluptas quia corrupti
              consectetur.
            </p>
            <a className="card__link" href="#">
              Visit the link
            </a>
            <a className="card__link--red" href="#">
              Visit the link
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
