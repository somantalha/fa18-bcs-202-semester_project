import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Men = () => {
    return ( 
        <div className="container">
    <div>
        <h1>Product Overview:</h1>
    </div>
    <div>
    <ul class="list-inline">
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/AllProducts">All ptoducts</Link>
    </li>
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/Women">Women</Link>
    </li>
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/Men">Men</Link>
    </li>
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/Bags">Bag</Link>
    </li>
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/Shoes">Shoes</Link>
    </li>
    <li class="list-inline-item">
        <Link className="nav-link active" id="clr"  to="/home/Watches">Watches</Link>
    </li>
    <li class="list-inline-item">
            <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
</Form>
    </li>
</ul>
</div>
    <div className="row">
        <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
            <img id="imgsize" src="../../task_1/men1.jpg" alt="men" width="100%" />
            <div className="centertext">Dress Shirt and jeans</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize" src="../../task_1/men2.jpg" alt="Men" width="100%"/> 
        <div className="centertext">Dress Shirt, jeans and coat</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize"  src="../../task_1/men3.jpg" alt="Men" width="100%"/>
        <div className="centertext">Sweat Shirt and jeans</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize"  src="../../task_1/men4.jpeg" alt="Men" width="100%"/>
        <div className="centertext">Brown three piece</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize"  src="../../task_1/men5.jpg" alt="Men" width="100%"/>
        <div className="centertext">Blue Three Piece</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize"  src="../../task_1/men6.jpg" alt="Men" width="100%"/>
        <div className="centertext">Jeans Trucker Jacket</div>
    </div>
    </div>
    <div className="col-md-3">
        <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
        <img id="imgsize"  src="../../task_1/men7.png" alt="Men" width="100%"/>
        <div  className="centertext">Off coat and Dress Pant</div>
    </div>
    </div>
</div>
<div className="col-md-12 text-center bg-light">
  <button type="button" id="btn" className="btn btn-primary">Load more</button>
</div>
</div>
     );
}
 
export default Men;