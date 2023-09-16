import React from "react";
import styles from './IndividualItem.module.css'
import Image from "next/image";
import { useRouter } from "next/router";

interface IndividualItem{
    userData:any;
}

const IndividualItem:React.FC<IndividualItem> = ({userData})=>{
    const menuItems = Object.entries(userData.menu);
    const router = useRouter();
    const handleAdd = () => {
        router.replace('/dashboard/add');
    }

    return<>
        <Image src='/pizza.png' width={45} height={45} alt="Pizza Icon" className={styles.pizza}/>
        <div className={styles.body}>
            <div className={styles.heading}>
                <p>Menu</p>
                <button type="button" onClick={handleAdd} className={styles.redirect_button}>ADD ITEMS</button>
            </div>
            <div className={styles.holder}></div>
        </div>
    </>
}

export default IndividualItem;