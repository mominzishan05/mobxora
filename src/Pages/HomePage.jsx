import React, { useEffect, useState } from "react";
import "../Css/HomePage.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtocart } from "../Features/cartSlice";


const HomePage = () => {
  const [userdata, setUserData] = useState([]);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const usershop = await axios.get("https://dummyjson.com/products/search?q=phone");
    setUserData(usershop.data.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* <h1>I am HomePage</h1> */}
      <div className="card-container">
        {userdata.map((value, index) => (
          <div className="card-box" key={index}>
            <img src={value.thumbnail} alt={value.title} />
            <h3>{value.title}</h3>
            <p>₹{value.price}</p>
            <button onClick={()=>dispatch(addtocart(value))}>Add-To-Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
