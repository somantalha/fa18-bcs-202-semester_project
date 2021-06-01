import React from 'react';
const ProductCategories = () => {
    return ( 
    <div className='container'>
    <div className="row">
    <div className="col-md-4">
        <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims">
            <img src="./task_1/women.jpg" alt="women" width="100%" />
            <div className="text">Women</div>
            <div className="text size">Spring 2020</div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims">
            <img src="./task_1/men.jpg" alt="men" width="100%"/> 
            <div className="text">Men</div>
            <div className="text size">Spring 2020</div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims">
            <img src="./task_1/accessories.jpg" alt="men" width="100%"/>
            <div className="text">Accessories</div>
            <div className="text size">Spring 2020</div>
        </div>
    </div>
</div> </div> );
}
 
export default ProductCategories;