import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import './ShopProducts.css'

const ShopProducts = () => {
  const productList = useSelector((state) => state.allProducts.products);
  const category = useSelector((state) => state.selectCategory.category);
  const sortState = useSelector(state => state.setSort.state)
  const searchState = useSelector(state => state.setSearch.search)
  const [productListByCategory, setProductListByCategory] = useState(productList)

  useEffect(() => {
    if (category.length !== 0) {
      setProductListByCategory(productList.filter(product => product.category === category))
    }
  }, [category]);

  useEffect(() => {
    if (sortState === 0) {
      setProductListByCategory(
        productListByCategory.sort((a, b) => {
          return a.price - b.price
        })
      )
    } else {
      setProductListByCategory(
        productListByCategory.sort((a, b) => {
          return b.price - a.price
        })
      )
    } 
  }, [sortState])

  useEffect(() => {
    console.log(searchState)
    if (searchState !== "") {
      setProductListByCategory(productList.filter(product => product.title.toLowerCase().includes(searchState.toLowerCase())))
    }
  },[searchState])

  return (
    <>
      <div className="shop-products">
        <Grid container space={5}>
          {productListByCategory.map((product) => {
            return (
              <Grid
                item
                sm={4}
                xs={12}
                key={product.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ShopProducts;
