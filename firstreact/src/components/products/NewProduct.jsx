import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";

var check;
const NewProduct = (props) => {
  const [name, setName] = React.useState(" ");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [category, setCategory] = React.useState(" ");
  const [stateimg, setStateimg] = React.useState({
    ProductImage: "",
  });

  const imageFileSelectHandler = (e) => {
    setStateimg({
      productImage: e.target.files[0],
    });
  };

  return (
    <Auth>
      <Admin>
        <Grid container spacing={20}>
          <Grid item xs={12}>
            <h1>Add New Product:</h1>
          </Grid>
          <form
            className="justify-content-center "
            onSubmit={(e) => {
              e.preventDefault();
              // console.log(e.target);
              // console.log(name);

              // let myForm = e.target;
              const formData = new FormData();
              // myForm
              for (var key of formData.entries()) {
                console.log(key[0] + ", " + key[1]);
              }
              // console.log(formData);
              // formData.append("name", e.name);
              // formData.append("price", e.price);
              // formData.append("category", e.category);
              // formData.append("quantity", e.quantity);
              // formData.append("productImage", stateimg.productImage);
              formData.append(
                "name",
                name
                // "wwtyewds"
              );
              formData.append(
                "price",
                price
                // "231"
              );
              formData.append(
                "category",
                category
                // "qwerty"
              );
              formData.append(
                "quantity",
                quantity
                // "543"
              );
              formData.append("productImage", stateimg.productImage);
              // console.log(formData);
              for (var key of formData.entries()) {
                // console.log(key[0] + ", " + key[1]);
                console.log(key[1]);
              }
              // var options = { formData };
              productService
                .addProduct(formData)
                .then((data) => {
                  console.log(" in .then");
                  console.log(data);
                  props.history.push("/home/AllProducts");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {/* <Grid item xs={3}></Grid>
            <Grid item xs={6}> */}
            <TextField
              label="Name:"
              name="name"
              fullWidth
              className="form-group"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Price"
              name="price"
              fullWidth
              className="form-group"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              label="Product Category:"
              name="category"
              fullWidth
              className="form-group"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <TextField
              label="Quantity"
              name="quantity"
              fullWidth
              className="form-group"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <p> </p>
            <div className="form-group">
              <input
                type="file"
                name="productImage"
                onChange={imageFileSelectHandler}
              />
            </div>
            {/* </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // onClick={(e) => {
              //   e.preventDefault();
              //   const formData = new FormData();
              //   formData.append("name", name);
              //   formData.append("price", price);
              //   formData.append("category", category);
              //   formData.append("quantity", quantity);
              //   formData.append("productImage", stateimg.productImage);
              //   productService
              //     .addProduct({
              //       formData,
              //     })
              //     .then((data) => {
              //       console.log(data);
              //       props.history.push("/home/AllProducts");
              //     })
              //     .catch((err) => {
              //       console.log(err);
              //     });
              // }}
            >
              Add This
            </Button>
            {/* </Grid> */}
          </form>
        </Grid>
      </Admin>
    </Auth>
  );
};

export default NewProduct;
