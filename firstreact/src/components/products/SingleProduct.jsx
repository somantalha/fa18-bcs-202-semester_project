import { Button, Grid, Link } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
// import { Grid } from "@material-ui/core";

const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  return (
    <Grid item xs={4}>
      <div class="card" style={{ width: "18rem" }}>
        <p>
          <strong>Product Image </strong>
          <img
            src={"http://localhost:4000/" + product.productImage}
            width="100px"
          />
        </p>
        {/* <img
          class="card-img-top"
          src={product.productImage}
          alt="Card image cap"
        /> */}
        <div class="card-body">
          <h5 class="card-title">
            <h2>
              <strong>Name:</strong> {product.name}
            </h2>
          </h5>
          <p>
            <strong>Price: </strong>
            {product.price}{" "}
          </p>
          <p>
            <strong>Product Category: </strong>
            {product.category}
          </p>
          {/* <hr /> */}

          {userService.isAdmin() && (
            <>
              <p>
                <strong>Quantity: </strong>
                {product.quantity}{" "}
              </p>{" "}
              <hr />
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
          {userService.isLoggedIn() && (
            <>
              <Button
                variant="contained"
                style={{
                  background: "black",
                  color: "white",
                  marginTop: "5px",
                }}
                onClick={(e) => {
                  history.push({
                    pathname: "/features",
                    // state: { detail: },
                  });
                }}
              >
                Add To Cart
              </Button>
            </>
          )}
        </div>
      </div>
      {/* <h2>
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
      <p>
        <strong>Product Image </strong>
        <img src={product.productImage} width="100px" />
      </p>
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
      <hr /> */}
    </Grid>
  );
};

export default withRouter(SingleProduct);
