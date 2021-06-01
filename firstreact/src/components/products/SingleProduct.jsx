import { Button, Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
// import { Grid } from "@material-ui/core";

const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  return (
    <Grid item xs={4}>
      <h2>{product.name}</h2>
      <p>{product.price} </p>{" "}
      {userService.isAdmin() && (
        <>
          <p>{product.quantity} </p>{" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              productService
                .deleteProduct(product._id)
                .then((data) => {
                  console.log(data);
                  onDelete();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete
          </Button>{" "}
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              history.push("/update/" + product._id);
            }}
          >
            Edit
          </Button>
        </>
      )}
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
