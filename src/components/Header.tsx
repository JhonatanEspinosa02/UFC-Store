import { useState } from "react";

function Header() {
  const [bag, setBag] = useState(false);

  return (
    <>
      {/* <header className="bg-black">
        <div className="p-16 flex justify-evenly">
          <div>
            <p className="text-white text-4xl font-bold">UFC Store</p>
          </div>

          <div className="relative group">
            <img
              src="/img/icons8-shopping-bag-50.png"
              alt="Descripción de la imagen"
              className="w-10 h-10"
            />
            <div className="absolute top-full w-96 h-72 left-0  bg-white border border-gray-300 shadow-lg p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p>The bag is empty</p>

              <table className="table-fixed w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 items-center">
                    <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">
                      Image
                    </th>
                    <th className="w-2/5 px-4 py-2 border border-gray-200 text-left">
                      Name
                    </th>
                    <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">
                      Price
                    </th>
                    <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">
                      Quantity
                    </th>
                    <th className="w-1/5 px-4 py-2 border border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-200">
                      <img
                        className="w-14"
                        src="/public/img_db/Accessorie_KontactAnkle_BlackWhite_03.jpg"
                        alt="ejemplo"
                      />
                    </td>
                    <td className="px-4 py-2 border border-gray-200">Kontac</td>
                    <td className="px-4 py-2 border border-gray-200 font-bold">
                      $500
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        <button className="rounded-lg bg-black text-white px-2">
                          -
                        </button>
                        <span>1</span>
                        <button className="rounded-lg bg-black text-white px-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-gray-200 text-center">
                      <button className="bg-red-500 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white">
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>Total a pagar</p>
              <button className="bg-black mt-3 p-2 text-white w-full">
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      </header> */}

{/* <header className="bg-black">
  <div className="p-16 flex justify-evenly">
    <div>
      <p className="text-white text-4xl font-bold">UFC Store</p>
    </div>

    <div className="relative">
      <div className="group inline-block">
        <img
          src="/img/icons8-shopping-bag-50.png"
          alt="Descripción de la imagen"
          className="w-10 h-10"
        />
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 h-72 bg-white border border-gray-300 shadow-lg p-4 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
          <p>The bag is empty</p>

          <table className="table-fixed w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 items-center">
                <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Image</th>
                <th className="w-2/5 px-4 py-2 border border-gray-200 text-left">Name</th>
                <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Price</th>
                <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Quantity</th>
                <th className="w-1/5 px-4 py-2 border border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">
                  <img
                    className="w-14"
                    src="/public/img_db/Accessorie_KontactAnkle_BlackWhite_03.jpg"
                    alt="ejemplo"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-200">Kontac</td>
                <td className="px-4 py-2 border border-gray-200 font-bold">$500</td>
                <td className="px-4 py-2 border border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <button className="rounded-lg bg-black text-white px-2">-</button>
                    <span>1</span>
                    <button className="rounded-lg bg-black text-white px-2">+</button>
                  </div>
                </td>
                <td className="px-4 py-2 border border-gray-200 text-center">
                  <button className="bg-red-500 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white">x</button>
                </td>
              </tr>
            </tbody>
          </table>

          <p>Total a pagar</p>
          <button className="bg-black mt-3 p-2 text-white w-full">Vaciar carrito</button>
        </div>
      </div>
    </div>
  </div>
</header> */}

<header className="bg-black">
  <div className="p-16 flex justify-evenly">
    <div>
      <p className="text-white text-4xl font-bold">UFC Store</p>
    </div>

    <div className="relative group">
      <div className="inline-block">
        <img
          src="/img/icons8-shopping-bag-50.png"
          alt="Descripción de la imagen"
          className="w-10 h-10"
        />
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 h-72 bg-white border border-gray-300 shadow-lg p-4 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
        <p>The bag is empty</p>

        <table className="table-fixed w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 items-center">
              <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Image</th>
              <th className="w-2/5 px-4 py-2 border border-gray-200 text-left">Name</th>
              <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Price</th>
              <th className="w-1/5 px-4 py-2 border border-gray-200 text-left">Quantity</th>
              <th className="w-1/5 px-4 py-2 border border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-200">
                <img
                  className="w-14"
                  src="/public/img_db/Accessorie_KontactAnkle_BlackWhite_03.jpg"
                  alt="ejemplo"
                />
              </td>
              <td className="px-4 py-2 border border-gray-200">Kontac</td>
              <td className="px-4 py-2 border border-gray-200 font-bold">$500</td>
              <td className="px-4 py-2 border border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <button className="rounded-lg bg-black text-white px-2">-</button>
                  <span>1</span>
                  <button className="rounded-lg bg-black text-white px-2">+</button>
                </div>
              </td>
              <td className="px-4 py-2 border border-gray-200 text-center">
                <button className="bg-red-500 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white">x</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p>Total a pagar</p>
        <button className="bg-black mt-3 p-2 text-white w-full">Vaciar carrito</button>
      </div>
    </div>
  </div>
</header>




    </>
  );
}

export default Header;
