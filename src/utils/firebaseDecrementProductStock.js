import { doc, updateDoc, increment } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";

const firebaseDecrementProductStock = async ( itemId , number ) => { 
    
    const itemReference = doc(dataBase, "products", itemId );
        
    await updateDoc( itemReference, { stock: increment(-number) });

    return itemReference
};  
   
export default firebaseDecrementProductStock;