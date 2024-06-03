import { Link } from "react-router-dom";
import { categoryLink } from "../types/type";

function Categories() {
  const links: categoryLink[] = [
    {
      id: 1,
      name: "Helmet's",
      href: "/helmet",
    },
    {
      id: 2,
      name: "Short's",
      href: "/short",
    },
    {
      id: 3,
      name: "Gloves",
      href: "/glove",
    },
    {
      id: 4,
      name: "Accessories",
      href: "/accessorie",
    },
  ];

  return (
    <>
      <div className="bg-[#3A3A3A] flex justify-evenly items-center p-10">
        {links.map((li) => (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <img src="/img/icons8-boxing-60.png" alt="helmet" />
              </div>
              <div>
                <Link to={li.href}>
                  <p className="text-3xl text-zinc-500 hover:text-white uppercase font-semibold text-center">
                    {li.name}
                  </p>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Categories;
