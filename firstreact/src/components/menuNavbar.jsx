import { Button } from "@material-ui/core";
// import { positions } from '@material-ui/system';
import React from "react";
import { Link } from "react-router-dom";
import userService from "../services/UserService";
const MenuNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
        <div id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id="white" to="/">
                <strong>COZA</strong> STORE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" id="clr" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " id="clr" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " id="clr" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " id="clr" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " id="clr" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " id="clr" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " id="clr" to="/addnew">
                Add new product
              </Link>
            </li>
            {!userService.isLoggedIn() ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link " id="clr" to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " id="clr" to="/register">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    id="clr"
                    onClick={(e) => {
                      userService.logout();
                      window.location.reload();
                    }}
                  >
                    Log out {userService.getLoggedInUser.name}
                  </Link>
                </li>
              </>
            )}
            {/* <li className="nav-item " > 
                    <Button variant="contained" color="primary" >Signup</Button>
                </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuNavbar;
