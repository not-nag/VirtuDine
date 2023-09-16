import React from 'react'
import styles from './Card.module.css'

interface Card{
    menuItems:any;
}

const Card:React.FC<Card> = ({menuItems}) =>{
    return <div className={styles.card_holder}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
    </div>
}

export default Card;