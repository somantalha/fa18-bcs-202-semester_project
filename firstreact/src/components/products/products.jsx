import React from "react";
import SingleProduct from "./SingleProduct";
import { Fab, Grid, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Pagination from "@material-ui/lab/Pagination";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import { withRouter } from "react-router";
// import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));

const Products = (props) => {
  console.log(props);
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(9);
  const classes = useStyles();
  // const page = props.match.params.page ? props.match.params.page : 1;
  const page = props.match?.params?.page || 1;
  // const page = 1;
  const getData = () => {
    productService
      .getProduct(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, [page, perPage]);
  // const handleNewProduct= ()=>{

  // };

  return (
    <div>
      <h1>Products List:</h1>
      {userService.isAdmin() && (
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
          <AddIcon />
        </Fab>
      )}
      <div className="container">
        {products.length == 0 ? (
          <p>No Product Found!</p>
        ) : (
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <SingleProduct key={index} product={product} onDelete={getData} />
            ))}
          </Grid>
        )}
        <Grid items xs={12}>
          <Pagination
            count={Math.ceil(total / perPage)}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              console.log(value);
              console.log(props);
              props.history.push("/blog/" + value);
            }}
          />
          Total produts: {total} Showing {(page - 1) * perPage} to{" "}
          {(page - 1) * perPage + products.length}
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(Products);
