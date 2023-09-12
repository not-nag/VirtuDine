import React from 'react'

import styles from './CafeName.module.css'


interface CafeNameProps {
  name: string;
}

const CafeName:React.FC<CafeNameProps> = ({name}) =>{
    return(
        <h1 className={styles.owner}><span>Welcome, </span>{name}.</h1>
    )
}

export default CafeName;