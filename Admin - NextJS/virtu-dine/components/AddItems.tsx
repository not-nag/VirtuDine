import React, { useState, useRef } from "react";
import { storage, database } from "@/Firebase/firebase";
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { update, ref } from "@firebase/database";
import Image from "next/image";
import styles from './AddItems.module.css'

interface AddItemsProps {
  userID: any;
}

const AddItems:React.FC<AddItemsProps> =({userID}) =>{

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
        console.log(userID);
        setItemName('');
        setImage(null);
    }

    const updateDetails = async(downloadURL:any) =>{
        try{
            const menuPath = ref(database, `users/${userID}/menu`);
            const itemData = {
                [itemName]: downloadURL,
            };
            await update(menuPath, itemData);
            setImage(null);
            setItemName('');
        }catch(e){
            console.log(e);
        }
    }

    const handleSubmit = async() => {
        if(!itemName.trim() || !image){
            window.alert("Enter Item Name and Add the image to continue");
        }
        else{
            const storageRef = sRef(storage);
            const imagesRef = sRef(storageRef, `${userID}`);
            const fileName = `${itemName}`;
            const spaceRef = sRef(imagesRef, fileName);
            try{
                await uploadBytes(spaceRef, image);
                const downloadURL = await getDownloadURL(spaceRef);
                updateDetails(downloadURL);
            }catch (error) {
                console.error('Error uploading image:', error);
                throw error;
            }
        }
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