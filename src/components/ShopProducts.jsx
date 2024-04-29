import ShopProduct from "./ShopProduct";
import { ProductList } from "../data/ProductList";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";

const ShopProducts = () => {
  const [menuOpen, setMenuOpen] = useState("block");

  const [category, setCategory] = useState(ProductList);

  const CategoryChange = (e) => {
    console.log(ProductList);
    if (e.target.id === "all") {
      setCategory(ProductList);
    } else {
      const filteredList = ProductList.filter(
        (product) => product.type === e.target.id
      );
      setCategory(filteredList);
    }
    return setMenuOpen("hidden");
  };

  return (
    <>
      <div
        onMouseEnter={() => setMenuOpen("block")}
        className={`dropdown container mx-auto [&>ul]:hover:${menuOpen}`}
      >
        <button className="">
          Category{<IoMdArrowDropdown className="inline" />}
        </button>
        <ul className={`border absolute z-20 w-[10rem] bg-white hidden `}>
          <li id="all" onClick={CategoryChange}>
            All
          </li>
          <li id="dress" onClick={CategoryChange}>
            Dresses
          </li>
          <li id="jeans" onClick={CategoryChange}>
            Jeans
          </li>
          <li id="shorts" onClick={CategoryChange}>
            Shorts
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 justify-items-center container m-auto">
        {category.map((item, key) => {
          return <ShopProduct {...item} key={key} />;
        })}
      </div>
    </>
  );
};

export default ShopProducts;

// {StoreList.map((item, key) => {
//   return (
//     <StoreItem
//       name={item.name}
//       key={key}
//       price={item.price}
//       image={item.image}
//     />
//   );
// })}

// ${
//   menuOpen ? "hidden" : "block"
// }
