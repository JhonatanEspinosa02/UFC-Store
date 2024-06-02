import { typeReducer } from "../reducers/productReducer";
import { CategoryType } from "../types/type";

type popularProductsProps = {
  product: CategoryType;
  dispatch: React.Dispatch<typeReducer>;
};

function PopularProducts({ product, dispatch }: popularProductsProps) {
  const { image, name, description, price } = product;

  return (
    <>
      <div className="bg-slate-100 p-7 m-5 rounded-lg items-center">
        <div>
          <img
            className="brightness-50 contrast-125 w-60 h-60 hover:filter-none rounded-lg"
            src={image}
            alt="product"
          />
        </div>

        <div className="my-7">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="text-zinc-500">{description}</p>
          <img className="w-10 h-10" src="/img/2903558.png" alt="rating" />
          <p>$ {price}</p>
        </div>

        <div className="flex justify-center items-center">
          <a
            href="#"
            className="bg-red-600 text-white text-xl text-center rounded py-2 px-5 w-full"
            onClick={() =>
              dispatch({ type: "add-to-bag", payload: { item: product } })
            }
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default PopularProducts;
