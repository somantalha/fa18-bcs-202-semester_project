import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import productService from "../../services/ProductService";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";

const NewProduct = (props) => {
  const [name, setName] = React.useState(" ");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [category, setCategory] = React.useState(" ");
  const [stateimg, setStateimg] = React.useState();
  // const [fd, setFd] = React.useState();
  setStateimg({
    productImage: null,
  });

  const imageFileSelectHandler = (e) => {
    setStateimg({
      productImage: e.target.files[0],
    });
  };

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
            <div>
              <input type="file" onChange={imageFileSelectHandler} />
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append("name", name);
                formData.append("price", price);
                formData.append("category", category);
                formData.append("quantity", quantity);
                formData.append("productImage", stateimg.productImage);
                productService
                  .addProduct({
                    formData,
                  })
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