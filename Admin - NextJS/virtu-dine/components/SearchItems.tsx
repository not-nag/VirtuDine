import React, { useState } from 'react'
import Image from 'next/image';

import styles from './SearchItems.module.css'


const SearchItems:React.FC = () =>{

  const [search, setSearch] = useState<string>('');

    return(
        <div  className={styles.searchBar}>
          <input type="text" placeholder='Search specific item here' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <Image src='/search-logo.png' alt='Search icon' width={30} height={30} className={styles.icon}/>
        </div>
    )
}

export default SearchItems;