import React from "react";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { wishlistAdd } from "../redux/slices/Slice";
const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error, wishlist } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  console.log(wishlist);
  return (
    <div className="menuu">
      <div className="our">
        <p className="discover">Wishlist</p>
      </div>
      <Grid container className="grid">
        {wishlist &&
          wishlist.map((elem, i) => {
            return (
              <Grid xl={6} xs={12}>
                <div className="card1">
                  <div className="all">
                    <img src={elem.imgSrc} alt="" />
                    <div className="names">
                      <p className="name">{elem.name}</p>
                      <p className="desc">{elem.desc}</p>
                    </div>
                  </div>
                  <div className="price">
                    <p>${elem.price}</p>
                    <button
                      className="favorite"
                      onClick={() => dispatch(wishlistAdd(elem))}
                    >
                      <FavoriteIcon />
                    </button>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Wishlist;
