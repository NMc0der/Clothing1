import React, { useContext } from "react";
import { ProductList } from "../data/ProductList";
import { ShopContext } from "../components/ShopContext";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";
import CartOrderEmpty from "../components/CartOrderEmpty";

const Cart = () => {
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  const totalAmount = getTotalPrice();
  return (
    <div className="py-[8rem] text-3xl pl-4">
      {/* <h2>Your Shopping Bag</h2> */}
      <div className="cart-items">
        {ProductList.map((product) => {
          if (cartItems[product.name] !== 0) {
            return <CartItem key={product.name} props={product} />;
          }
        })}
      </div>
      {/* <h2 className={`${!totalAmount && "hidden"}`}>hi {totalAmount}</h2> */}
      <div className={`${!totalAmount && "hidden"} mt-4`}>
        <CartOrderSummary amount={totalAmount} />
      </div>
      <div
        className={`bg-[#EEEEEE] ${
          totalAmount && "hidden"
        } p-6 text-xl text-center font-[Garamond]`}
      >
        <CartOrderEmpty />
      </div>
    </div>
  );
};

export default Cart;
