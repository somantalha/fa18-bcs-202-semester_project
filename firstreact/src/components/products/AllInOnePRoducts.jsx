import { Button, Grid, Link } from "@material-ui/core";
import React from "react";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";

const AllInOnePRoducts = (props) => {
  const { product, onDelete, history } = props;
  console.log("in sigle product");
  const [cookies, setCookie] = useCookies(["user"]);
  function handleCookie() {
    // setCookie("user", "gowtham", {
    //   path: "/",
    // });
  }
  return (
    <Grid item xs={4}>
      {" "}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <p>
            <img
              src={"http://localhost:4000/" + product.productImage}
              width="100%"
            />
          </p>
          <div className="card-body">
            <h5 className="card-title">
              <p>
                <strong>Name:</strong> {product.name}
              </p>
            </h5>
            <p>
              <strong>Price: </strong>
              {product.price}{" "}
            </p>
            <p>
              <strong>Product Category: </strong>
              {product.category}
            </p>
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
                  // onClick={(e) => {
                  //   history.push({
                  //     pathname: "/features",
                  //     // state: { detail: },
                  //   });
                  // }}
                  onClick={handleCookie}
                >
                  Add To Cart
                </Button>
              </>
            )}
          </div>
        </div>{" "}
      </div>
    </Grid>
  );
};

export default withRouter(AllInOnePRoducts);
