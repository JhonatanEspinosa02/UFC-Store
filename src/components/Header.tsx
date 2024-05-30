function Header() {
  return (
    <>
      <header className="bg-black pb-24">
        <div className="p-10 flex justify-between items-center">
          <div className="p-5">
            <a href="#" className="text-white text-xl font-semibold p-2">
              UFC Store
            </a>
          </div>

          <div className="p-5">
            <a href="#" className="text-white text-xl font-semibold p-2 px-8">
              About Us
            </a>
            <a href="#" className="text-white text-xl font-semibold p-2 px-8">
              Product's
            </a>
            <a href="#" className="text-white text-xl font-semibold p-2 px-8">
              Social media
            </a>
            <button className="bg-red-600 text-white text-xl rounded py-2 px-5">
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="flex mx-auto justify-center h-[675px] w-[1250px] brightness-50 contrast-125"
          style={{ backgroundImage: "url('/img/Brandon-Moreno.webp')" }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-white filter-none uppercase text-4xl font-bold mb-4 md:filter-none">
              ufc store
            </h1>
            <p className="text-white">The best quality and the best price</p>
            <button className="bg-red-600 text-white text-xl rounded py-2 px-5 my-10">
              Get started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
