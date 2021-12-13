import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productAction";
// import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ProductApi from "../../apis/productApi";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ selectedTab }) => {
  const products = useSelector((state) => state.allProducts.products);
  const [tab, setTab] = useState(selectedTab);
  const [numberProduct, setNumberProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tab === 0) {
      setNumberProduct(products.slice(20 - 4));
    } else if (tab === 1) {
      setNumberProduct(products.slice(20 - 8, 20 - 4));
    } else if (tab === 2) {
      setNumberProduct(products.slice(20 - 12, 20 - 8));
    } else if (tab === 3) {
      setNumberProduct(products.slice(20 - 16, 20 - 12));
    }
  }, [tab, products]);


  useEffect(() => {
    const fetchProductList = async () => {
      try {
        let params = {};
        const response = await ProductApi.getAll(params);
        dispatch(setProducts(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Grid container spacing={4}>
          {numberProduct.map((product) => {
            return (
              <Grid
                item
                sm={3}
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

export default ProductList;
