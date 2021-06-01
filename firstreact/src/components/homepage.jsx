import React from 'react';
import ProductCategories from './productCategories';
import ProductOverview from './productOverview';
import TopCover from './topcover';
const homepage = () => {
    return ( 
        <div>
            <TopCover />
            <ProductCategories />
            <ProductOverview />
        </div>
     );
}
 
export default homepage;