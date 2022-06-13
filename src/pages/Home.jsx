import React from "react";
import { Products } from "../components/Products";

const Home = () => {
  return (

    // <div>{/* code here */}</div>;

    <div
      style={{
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Products />
    </div>
  );
};

export default Home;