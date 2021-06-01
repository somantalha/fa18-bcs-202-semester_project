import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import React from "react";
import "./App.css";
import MenuNavbar from "./components/menuNavbar";
// import ProductCategories from './components/productCategories';
// import ProductOverview from './components/productOverview';
import Footercomp from "./components/footercomp";
import landingpage from "./components/landingpage";
import homepage from "./components/homepage";
import features from "./components/features";
import blog from "./components/blog";
import contact from "./components/contact";
import about from "./components/about";
import NotFound from "./components/pagenotfound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import AllProducts from "./components/products/AllProducts";
import Shoes from "./components/products/Shoes";
import Watches from "./components/products/Watches";
import Bags from "./components/products/Bags";
import Women from "./components/products/Women";
import Men from "./components/products/Men";
import Shop from "./components/Shop";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <MenuNavbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home/AllProducts" component={AllProducts} />
          <Route path="/home/Shoes" component={Shoes} />
          <Route path="/home/Watches" component={Watches} />
          <Route path="/home/Bags" component={Bags} />
          <Route path="/home/Women" component={Women} />
          <Route path="/home/Men" component={Men} />
          <Route path="/home" component={homepage} />
          <Route path="/Shop" component={Shop} />
          <Route path="/addnew" component={NewProduct} />
          <Route path="/update/:id" component={UpdateProduct} />
          <Route path="/features" component={features} />
          <Route path="/blog/:page?" component={blog} />
          {/* <Route path="/blog" component={blog} /> */}
          <Route path="/contact" component={contact} />
          <Route path="/about" component={about} />
          <Route path="/Not-Found" exact component={NotFound} />
          <Route path="/" exact component={landingpage} />
          <Redirect to="/Not-Found" />
        </Switch>
        <Footercomp />
      </div>
    </Router>
  );
}

export default App;
