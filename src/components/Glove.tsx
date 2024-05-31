import { glovesProduct } from "../data/db"

function Glove() {
  return (
<>
    <div className="p-14">
          <h1 className="font-bold uppercase text-center text-3xl">
          Gloves for the strongest kicks
          </h1>
          <p className="font-bold text-center text-zinc-400">
            Knock out before the end?
          </p>
        </div>


        <div className="grid grid-cols-4 items-center">
          {glovesProduct.map((product) => (
            <>
              <div className="bg-slate-100 p-7 m-5 rounded-lg items-center">
                <div>
                  <img
                    className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
                    src={product.image}
                    alt="product"
                  />
                </div>

                <div className="my-7">
                  <h2 className="font-bold text-2xl">{product.name}</h2>
                  <p className="text-zinc-500">{product.description}</p>
                  <img
                    className="w-10 h-10"
                    src="/img/2903558.png"
                    alt="rating"
                  />
                  <p>$ {product.price}</p>
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href="#"
                    className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
    </>
  )
}

export default Glove