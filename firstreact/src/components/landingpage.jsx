// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css'; 
import React from 'react';
import '../App.css';
// import MenuNavbar from './components/menuNavbar';
import ProductCategories from './productCategories';
import ProductOverview from './productOverview';
import TopCover from './topcover';
// import Footercomp from './components/footercomp';
function landingpage() {
  return (
    <div>
    <TopCover />
    <ProductCategories />
    <ProductOverview />
  </div>
  );
}

export default landingpage;