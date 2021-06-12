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

            {/* <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Picture</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>
                      <img src={p.productImage} width="100px" alt="img" />
                    </td>
                    <td>
                      <button
                        className="btn btn-warning mr-2"
                        onClick={(e) => {}}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={(e) => {}}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
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
              props.history.push("/home/AllProducts/" + value);
            }}
          />
          Total produts: {total} Showing {(page - 1) * perPage + 1} to{" "}
          {(page - 1) * perPage + products.length}
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(Products);
