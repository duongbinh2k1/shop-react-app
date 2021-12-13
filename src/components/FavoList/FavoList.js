import React from "react";
import { useSelector } from "react-redux";
import FavoCard from "../FavoCard/FavoCard";
import "./FavoList.css";

const FavoList = () => {
  const favoProducts = useSelector((state) => state.favoriteProducts.products);

  return (
    <>
      {favoProducts.length === 0 && (
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "10px",
          }}
        >
          No Product
        </h1>
      )}

      {favoProducts.length !== 0 && (
        <div className="title">
          <div className="img" style={{ width: "100px", textAlign: "center" }}>
            Image
          </div>
          <div className="Name" style={{ textAlign: "center", width: "260px" }}>
            Name
          </div>
          <div className="price" style={{ flex: "1", textAlign: "center" }}>
            Price
          </div>
          <div className="action" style={{ flex: "1", textAlign: "center" }}>
            Action Add
          </div>
          <div className="remove" style={{ flex: "1", textAlign: "center" }}>
            Remove
          </div>
        </div>
      )}

      <div className="favo-list" style={{ marginBottom: "50px" }}>
        {favoProducts.length !== 0 &&
          favoProducts.map((item, index) => {
            return <FavoCard favoProduct={item} key={index} />;
          })}
      </div>
    </>
  );
};

export default FavoList;
