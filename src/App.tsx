import Categories from "./components/Categories";
import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Helmet from "./components/Helmet";
import Short from "./components/Short";
import Glove from "./components/Glove";
import Accessories from "./components/Accessories";
// import BrandonMoreno from "./components/BrandonMoreno"
import { useReducer } from "react";
import { initialBag, stateProductReducer } from "./reducers/productReducer";
import {
  accessorieProduct,
  glovesProduct,
  helmetProduct,
  shortProduct,
} from "./data/db";

function App() {
  const routesConfig = [
    { path: "/helmet", component: Helmet, products: helmetProduct },
    { path: "/short", component: Short, products: shortProduct },
    { path: "/glove", component: Glove, products: glovesProduct },
    {
      path: "/accessorie",
      component: Accessories,
      products: accessorieProduct,
    },
  ];

  const [state, dispatch] = useReducer(initialBag, stateProductReducer);

  return (
    <>
      {/* <BrandonMoreno/> */}
      <Header />

      <Router>
        <Categories />
        <div className="grid grid-cols-4 items-center">
          <Routes>
            {routesConfig.map(({ path, component: Component, products }) => (
              <Route
                key={path}
                path={path}
                element={<Component products={products} dispatch={dispatch} />}
              />
            ))}
          </Routes>
        </div>
      </Router>

      <main className="p-20">
        <div className="p-14">
          <h1 className="font-bold uppercase text-center text-3xl">
            The most popular products
          </h1>
          <p className="font-bold text-center text-zinc-400">
            Be better with the best
          </p>
        </div>

        <div className="grid grid-cols-4 items-center">
          {state.data.map((product) => (
            <PopularProducts
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
        </div>
        <div className="p-14 mt-10">
          <h1 className="font-bold uppercase text-center text-3xl">
            For women's
          </h1>

          <div className="flex items-center">
            <div className="p-10">
              <img
                src="/img/285650dfasfasdfsdf374_5390087674374858_5279465249507312205_n-770x450.jpg"
                alt="her"
              />
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

        <div
          className="flex mx-auto justify-center h-80 w-full bg-cover bg-center bg-no-repeat brightness-50 contrast-125 p-10 m-10"
          style={{
            backgroundImage: "url('/img/GettyImages-1154277360-1024x640.jpg')",
          }}
        >
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-white text-center filter-none text-4xl font-bold mb-4 md:filter-none">
              People try to compete with the UFC but we're <br /> the best at
              what we do.
            </h1>
            <p className="text-white">Dana White</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
