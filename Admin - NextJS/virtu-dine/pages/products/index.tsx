import Background from '@/components/Background'
import React, { useEffect, useState } from 'react'
import checkAuthMiddleware from '@/middleware/checkAuthMiddleware'
import { useRouter } from 'next/router'
import ProductShow from '@/components/ProductsShow'
import { getDatabase, ref, child, get } from 'firebase/database'

const Products:React.FC = () =>{
    const [ authenticated, setAuthenticated ] = useState<boolean>(false);
    const router = useRouter();
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        checkAuthMiddleware((uid)=>{
            if(uid){
                const dbRef = ref(getDatabase());
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        setUserData(data);
                        setAuthenticated(true)
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
            }
            else{
                router.replace('/');
            }
        })

    }, [])


    if(authenticated){
        return<>
            <Background />
            <ProductShow userData={userData}/>
        </>
    }
    else{
        return null;
    }
}


export default Products;