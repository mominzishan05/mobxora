import React from "react";
import "../Css/CartPage.css";
import { useSelector } from "react-redux";
import { removecart } from "../Features/cartSlice";
import { useDispatch } from "react-redux";
const CartPage = () => {
  const dispatch = useDispatch();
  const userprodct = useSelector((state)=> state.carts.items);
  return (
    <>
     
      {userprodct.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="card-container">
          {userprodct.map((value, index) => (
            <div className="card-box" key={index}>
              <img src={value.thumbnail} alt={value.title} />
              <h3>{value.title}</h3>
              <p>₹{value.price}</p>
              <button onClick={() => dispatch(removecart(value.id))}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default CartPage;