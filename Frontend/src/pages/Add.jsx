import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { deleteUserData } from "../redux/slices/Slice";
import { postUserData } from "../redux/slices/Slice";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
const Add = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.number().positive().required("Required"),
    desc: Yup.string().required("Required"),
    imgSrc: Yup.string().required("required"),
  });
  const dispatch = useDispatch();
  const { data, loading, error, wishlist } = useSelector(
    (state) => state.product
  );
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  // const searched = data.filter((elem) =>
  //   elem.name.toLowerCase().includes(search.toLowerCase())
  // );
  return (
    <div className="table">
      <div>
        <h1>Add</h1>
        <Formik
          initialValues={{
            id: uuidv4(),
            name: "",
            price: "",
            desc: "",
            imgSrc: "",
          }}
          // validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            dispatch(postUserData(values));
            console.log(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form className="formik" onSubmit={handleSubmit}>
              <Field name="name" placeholder="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="lastName" placeholder="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <Field name="desc" placeholder="description" />
              {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
              <Field name="imgSrc" placeholder="imgSrc" />
              {errors.imgSrc && touched.imgSrc ? (
                <div>{errors.imgSrc}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <input
        type="text"
        placeholder="search.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <button
                      className="button"
                      onClick={() => {
                        dispatch(deleteUserData(row.id));
                      }}
                    >
                      delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Add;
