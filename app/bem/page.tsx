import "./style.css";

export default function Page() {
  return (
    <main className="p-42">
      <div className="user">
        <img
          className="user__photo"
          src="https://placehold.co/400x400"
          alt="user"
        />
        <div className="user__name">Name here</div>
        <button className="button button--primary">Button Text</button>
      </div>
      <div className="user user--dark">
        <img
          className="user__photo"
          src="https://placehold.co/400x400"
          alt="user"
        />
        <div className="user__name">Name here</div>
        <button className="button button--primary">Button Text</button>
      </div>
    </main>
  );
}
