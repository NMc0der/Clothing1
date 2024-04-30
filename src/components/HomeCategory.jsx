import { Link } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import HomeCategoryLink from "./HomeCategoryLink";
const HomeCategory = () => {
  const filteredLink = (category) => {
    // return console.log(category);
    return ProductList.filter((product) => product.type === category);
  };

  return (
    <div className="m-5">
      <h2 className="text-center text-3xl tracking-widest">
        SHOP BY <span className="font-bold">CATEGORY</span>
      </h2>
      <div className="grid grid-cols-4 gap-4 m-8">
        <Link to="/shop" state={filteredLink("dress")}>
          <HomeCategoryLink type={"Dresses"} list={filteredLink("dress")} />
        </Link>

        <Link to="/shop" state={filteredLink("shorts")}>
          <HomeCategoryLink type={"shorts"} list={filteredLink("shorts")} />
        </Link>

        <Link to="/shop" state={filteredLink("jeans")}>
          <HomeCategoryLink type={"jeans"} list={filteredLink("jeans")} />
        </Link>
      </div>
    </div>
  );
};

export default HomeCategory;

// state={{ from: filteredLink("dress") }}
