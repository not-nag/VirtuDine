import React from 'react'
import SignOut from './SignOut';
import styles from './ProductsShow.module.css'
import SearchItems from './SearchItems';
import IndividualItem from './IndividualItem';

interface ProductShowProps {
  userData: any;
  uid: any;
}

const ProductShow:React.FC<ProductShowProps> = ({userData, uid}) => {
    

    return(
        <div className={styles.products}>
            <SearchItems />
            <SignOut />
            <IndividualItem userData = {userData} uid={uid} />
        </div>
    )
}

export default ProductShow;