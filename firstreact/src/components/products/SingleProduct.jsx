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
      <h2>
        <strong>Name:</strong> {product.name}
      </h2>
      <p>
        <strong>Price: </strong>
        {product.price}{" "}
      </p>
      <p>
        <strong>Product Category: </strong>
        {product.category}
      </p>
      {/* <div>
        <img id="imgsize" src="../../task_1/s4.jpg" alt="Men" width="100%" />
        <div className="centertext">Brown three piece</div>
      </div>{" "} */}
      {userService.isAdmin() && (
        <>
          <p>
            <strong>Quantity: </strong>
            {product.quantity}{" "}
          </p>{" "}
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
