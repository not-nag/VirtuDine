import React from 'react'
import SignOut from './SignOut';
import styles from './ProductsShow.module.css'
import SearchItems from './SearchItems';
import IndividualItem from './IndividualItem';

interface ProductShowProps {
  userData: any;
  userID: any;
}

const ProductShow:React.FC<ProductShowProps> = ({userData, userID}) => {
    
    const name = userData.cafeName;
    const menu = userData.menu;

    return(
        <div className={styles.products}>
            <SearchItems />
            <SignOut />
            <IndividualItem userData = {userData} />
        </div>
    )
}

export default ProductShow;