import React, { useState, useRef } from "react";
import { database } from "@/Firebase/firebase";
import Image from "next/image";
import styles from './AddItems.module.css'

const AddItems:React.FC =() =>{

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const[itemName, setItemName] = useState<string>('');
    const[image, setImage] = useState<File | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e:any) => {
        const selectedFile = e.target.files?.[0];
        setImage(selectedFile);
    };

    const handleReset = () => {
        setItemName('');
        setImage(null);
    }

    const handleSubmit = () => {
        console.log("submit");
    }
    return(
        <>
            <div className={styles.inputItems}>
                <div className={styles.fastfood}>
                    <div className={styles.line}></div>
                    <Image src='/fast-food.png' alt="Fast Food icon" width={40} height={40}/>
                    <div className={styles.line}></div>
                </div>
                <p>Add a new item</p>
                <input type="text" onChange={(e)=>{setItemName(e.target.value)}} value={itemName} placeholder="Name of the food"/>
                <button type="button" onClick={handleClick} className={image?styles.button_purple:styles.button_orange}>{image?image.name:'Add Image'}</button>
                <input type="file" accept=".jpg, .jpeg, .png, .pdf" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                {/* {image && <p>Selected File: {image.name}</p>} */}
            </div>
            <div className={styles.buttons}>
                <button type="button" onClick={handleReset} className={styles.reset}>Reset</button>
                <button type="button" onClick={handleSubmit} className={styles.submit} >Add Item</button>
            </div>
        </>
    )
}

export default AddItems;