import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error, wishlist } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const item = data.find((elem) => elem.id == id);
  return (
    <div className="card1">
      <div className="all">
        <img src={item.imgSrc} alt="" />
        <div className="names">
          <p className="name">{item.name}</p>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
      <div className="price">
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default Detail;
