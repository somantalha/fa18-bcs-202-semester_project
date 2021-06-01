import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import productService from "../../services/ProductService";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";

const NewProduct = (props) => {
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

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
              label="Quantity"
              fullWidth
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                productService
                  .addProduct({ name, price, quantity })
                  .then((data) => {
                    console.log(data);
                    props.history.push("/blog");
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
