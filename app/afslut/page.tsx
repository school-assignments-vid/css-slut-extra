export default function Page() {
  return (
    <div>
      <nav></nav>
      <section className="bg-[#F7F3F2] text-black">
        <div className="max-w-4xl mx-auto bg-[#FEEAE3] flex flex-col md:flex-row">
          <img
            className="aspect-square w-1/2"
            src="/img1-large.jpg"
            alt="fuckass"
          />
          <a
            href="#"
            className="aspect-square w-1/2 flex items-center justify-center flex-col uppercase gap-4"
          >
            <h2 className="font-semibold text-2xl">Sultry & Smart</h2>
            <span>Hot Spring Looks</span>
            <div className="bg-black border-2 border-black w-24" />
            <p className="normal-case">Shop Women</p>
          </a>
        </div>
      </section>
      <section className="bg-[#D4E4E1] text-white">
        <div className="max-w-4xl mx-auto bg-[#A3C7BD] flex flex-col md:flex-row">
          <a
            href="#"
            className="aspect-square w-1/2 flex items-center justify-center flex-col gap-4"
          >
            <h2 className="font-semibold text-2xl">Elegant & Slick</h2>
            <span>Get ready for summer</span>
            <div className="bg-white border-2 border-white w-24" />
            <p className="normal-case">Shop Men</p>
          </a>
          <img
            className="aspect-square w-1/2"
            src="/img2-large.jpg"
            alt="fuckass"
          />
        </div>
      </section>
      <section>
        <h2></h2>
        <div>
          <a href="#">
            <img src="" alt="" />
            <span></span>
            <span></span>
          </a>
        </div>
      </section>
      <section>
        <h2></h2>
        <p></p>
        <input type="text" />
        <button></button>
      </section>
      <section>
        <a href="#">
          <span></span>
          <span></span>
        </a>
      </section>
      <footer></footer>
    </div>
  );
}
