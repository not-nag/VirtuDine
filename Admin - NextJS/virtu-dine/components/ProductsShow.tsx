import React from 'react'
import SignOut from './SignOut';
import styles from './ProductsShow.module.css'
import AddItems from './AddItems';
import SearchItems from './SearchItems';

interface ProductShowProps {
  userData: any;
}

const ProductShow:React.FC<ProductShowProps> = ({userData}) => {
    
    const name = userData.cafeName;
    const menu = userData.menu;

    return(
        <div className={styles.products}>
            <SearchItems />
            <SignOut />
            <AddItems />
        </div>
    )
}

export default ProductShow;