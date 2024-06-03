import { CategoryType } from "../types/type";
import { typeReducer } from "../reducers/productReducer";

type catProductProps = {
  products: CategoryType[];
  dispatch: React.Dispatch<typeReducer>;
};

function Glove({ products, dispatch }: catProductProps) {
  return (
    <>
      {products.map((product) => (
        <div className="bg-slate-100 p-7 m-5  rounded-lg items-center" key={product.id}>
          <div className="flex justify-center">
            <img
              className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg items-center"
              src={product.image}
              alt="product"
            />
          </div>

          <div className="my-7">
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <p className="text-zinc-500">{product.description}</p>
            <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
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
      ))}
    </>
  );
}

export default Glove;
