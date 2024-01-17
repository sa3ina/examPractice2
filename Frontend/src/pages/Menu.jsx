import React from "react";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { wishlistAdd } from "../redux/slices/Slice";
import { Link } from "react-router-dom";
const Menu = () => {
  const dispatch = useDispatch();
  const { data, loading, error, wishlist } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="menuu">
      <div className="our">
        <p className="ourmenu">OUR MENU</p>
        <p className="discover">Discover Our Exclusive Menu</p>
        <div className="mainn">
          <div className="main">Main</div>
          <div className="dessert">Dessert</div>
          <div className="drinks">Drinks</div>
        </div>
      </div>
      <Grid container className="grid">
        {data &&
          data.map((elem, i) => {
            return (
              <Grid xl={6} xs={12}>
                <div className="card1">
                  <div className="all">
                    <img src={elem.imgSrc} alt="" />
                    <div className="names">
                      <Link to={`/${elem.id}`} className="linkk">
                        <p className="name">{elem.name}</p>
                      </Link>

                      <p className="desc">{elem.desc}</p>
                    </div>
                  </div>
                  <div className="price">
                    <p>${elem.price}</p>
                    <button
                      className="favorite"
                      onClick={() => dispatch(wishlistAdd(elem))}
                    >
                      {wishlist.find((item) => item.id == elem.id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
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

export default Menu;
