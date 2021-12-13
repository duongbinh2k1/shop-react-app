import React from "react";
import ShopProducts from "../../components/ShopProducts/ShopProducts";
import SideBar from "../../components/SideBar/SideBar";

const Shop = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "90px" }}>
        <div
          className="shop-wrapper"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: '40px',
            position: 'relative'
          }}
        >
          <SideBar style={{ flex: "1" }} />
          <ShopProducts style={{ flex: "3" }} />
        </div>
      </div>
    </>
  );
};

export default Shop;
