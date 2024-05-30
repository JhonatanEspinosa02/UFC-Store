function PopularProducts() {
  return (
    <>
      <main className="p-20">
        <div className="p-14">
          <h1 className="font-bold uppercase text-center text-3xl">
            The most popular products
          </h1>
          <p className="font-bold text-center text-zinc-400">
            Be better with the best
          </p>
        </div>

        <div className="flex justify-evenly">
          <div className="bg-slate-100 p-7 rounded-lg">
            <div>
              <img
                className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
                src="/img/71IbQNdSxKL._AC_UF1000,1000_QL80_.jpg"
                alt="helmet"
              />
            </div>

            <div className="my-7">
              <h2 className="font-bold text-2xl">Helmet</h2>
              <p className="text-zinc-500">
                Lorem ipsum, dolor sit amet <br /> Id iure alias, ratione
                adipisci
              </p>
              <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
              <p>$</p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
              >
                See Product
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-7 rounded-lg">
            <div>
              <img
                className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
                src="/img/collection-fight-shorts_1200x1200.jpg"
                alt="short"
              />
            </div>

            <div className="my-7">
              <h2 className="font-bold text-2xl">Helmet</h2>
              <p className="text-zinc-500">
                Lorem ipsum, dolor sit amet <br /> Id iure alias, ratione
                adipisci
              </p>
              <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
              <p>$</p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
              >
                See Product
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-7 rounded-lg">
            <div>
              <img
                className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
                src="/public/img/pfl-official-mma-fight-glove-341930_2048x.webp"
                alt="helmet"
              />
            </div>

            <div className="my-7">
              <h2 className="font-bold text-2xl">Helmet</h2>
              <p className="text-zinc-500">
                Lorem ipsum, dolor sit amet <br /> Id iure alias, ratione
                adipisci
              </p>
              <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
              <p>$</p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
              >
                See Product
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-7 rounded-lg">
            <div>
              <img
                className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
                src="/img/61-YhYBuEeS._AC_UF894,1000_QL80_.jpg"
                alt="helmet"
              />
            </div>

            <div className="my-7">
              <h2 className="font-bold text-2xl">Helmet</h2>
              <p className="text-zinc-500">
                Lorem ipsum, dolor sit amet <br /> Id iure alias, ratione
                adipisci
              </p>
              <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
              <p>$</p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
              >
                See Product
              </a>
            </div>
          </div>
        </div>

        <div className="p-14 mt-10">
          <h1 className="font-bold uppercase text-center text-3xl">
            For women's
          </h1>

          <div className="flex items-center">
            <div className="p-10">
                <img src="/img/285650dfasfasdfsdf374_5390087674374858_5279465249507312205_n-770x450.jpg" alt="her" />
            </div>
            <div className="p-10">
                <img src="/img/010124-UFC-300-LP-BACKGROUND-HTW.jpg" alt="300" />
            </div>
          </div>


          <p className="font-bold text-center text-zinc-400">
            Women also know how to fight, here you will find the best quality{" "}
            <br /> and comfort for each one of you.
          </p>
        </div>
        <div className="flex justify-center">
        <a
                href="#"
                className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 "
              >
                See Product
              </a>
        </div>

        <div className="flex mx-auto justify-center h-80 w-full bg-cover bg-center bg-no-repeat brightness-50 contrast-125 p-10 m-10"
          style={{ backgroundImage: "url('/img/GettyImages-1154277360-1024x640.jpg')" }}>

            <div className="flex justify-center items-center flex-col">
            <h1 className="text-white text-center filter-none text-4xl font-bold mb-4 md:filter-none">
            People try to compete with the UFC but we're <br /> the best at what we do.
            </h1>
            <p className="text-white">Dana White</p>
            </div>
        </div>

        



      </main>
    </>
  );
}

export default PopularProducts;
