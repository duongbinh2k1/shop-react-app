import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SideBar.css";
import CategoriestApi from "../../apis/categoriesApi";
import {
  selectCategory,
  setCategories,
} from "../../redux/actions/categoriesAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";
import { sortByPriceAction } from "../../redux/actions/sortByPrice";
import { searchAction } from "../../redux/actions/searchAction";

const SideBar = () => {
  const categoryList = useSelector((state) => state.allCategories.categories);
  const [search, setSearch] = useState('')
  const typingRef = useRef(null)
  const dispatch = useDispatch();

  useEffect(() => {
    const categories = async () => {
      try {
        const params = {};
        const responsive = await CategoriestApi.getAll(params);
        dispatch(setCategories(responsive));
      } catch (err) {
        throw err;
      }
    };
    categories();
  }, []);


  const handleSelectCategory = (item) => {
    dispatch(selectCategory(item));
  };

  const handleSetSort = (state) => {
    dispatch(sortByPriceAction(state))
  }

  const handleSearch = (e) => {
    const value = e.target.value

    if (typingRef.current) {
      clearTimeout(typingRef.current)
    }

    typingRef.current = setTimeout(() => {
      dispatch(searchAction(value))
    }, 1000)
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-search">
          <input type="text" placeholder="Search here" onChange={handleSearch} />
          <SearchIcon className="search-icon" />
        </div>
        <div className="sidebar-main">
          <div className="sidebar-categories">
            <h2>Categories</h2>
            <ul>
              {categoryList.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelectCategory(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar-price">
            <h2>Sort</h2>
            <p onClick={() => handleSetSort(1)} style={{cursor: 'pointer'}}>Increasing</p>
            <p onClick={() => handleSetSort(0)} style={{cursor: 'pointer'}}>Decrease</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
