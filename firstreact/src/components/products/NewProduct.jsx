import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";

const NewProduct = (props) => {
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [category, setCategory] = React.useState();

  return (
    <Auth>
      <Admin>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Add New Product:</h1>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField
              label="Name:"
              fullWidth
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Price"
              fullWidth
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              label="Product Category:"
              fullWidth
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <TextField
              label="Quantity"
              fullWidth
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <p> </p>
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                productService
                  .addProduct({ name, price, category, quantity })
                  .then((data) => {
                    console.log(data);
                    props.history.push("/home/AllProducts");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Add This
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Admin>
    </Auth>
  );
};

export default NewProduct;
