import React from 'react'
import SignOut from './SignOut';
import styles from './ProductsShow.module.css'
import CafeName from './CafeName';

interface ProductShowProps {
  userData: any;
}

const ProductShow:React.FC<ProductShowProps> = ({userData}) => {
    
    const name = userData.cafeName;

    return(
        <div className={styles.products}>
            <CafeName name={name} />
            <SignOut />
        </div>
    )
}

export default ProductShow;