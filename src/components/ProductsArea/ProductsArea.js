import React, { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import ProductList from "../ProductList/ProductList";
import "./ProductsArea.css";
import BestSeller from "../BestSeller/BestSeller";
import Trending from "../Trending/Trending";
import NewArrivals from "../NewArrivals/NewArrivals";
import AllProducts from "../AllProducts/AllProducts";

const ProductsArea = () => {
  const listData = ["BestSeller", "Trending", "New Arrivals", "All Products"];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div className="products-area">
        <ul className="product-list">
          <AppBar
            position="static"
            style={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 1px 0",
              zIndex: "0",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <h1>Future Producs</h1>
            <Tabs value={selectedTab} onChange={handleChange}>
              {listData.map((item, index) => {
                return <Tab label={<span className="label">{item}</span>} key={index} />;
              })}
            </Tabs>
          </AppBar>
        </ul>
        {selectedTab === 0 && <BestSeller selectedTab={selectedTab} />}
        {selectedTab === 1 && <Trending selectedTab={selectedTab} />}
        {selectedTab === 2 && <NewArrivals selectedTab={selectedTab} />}
        {selectedTab === 3 && <AllProducts selectedTab={selectedTab} />}
      </div>
    </>
  );
};

export default ProductsArea;
