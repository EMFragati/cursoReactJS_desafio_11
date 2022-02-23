import { collection, doc, setDoc } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";

const firebaseUploadOrder = async ( order ) => { 
    // Add a new document with a generated id
    const newOrderdRef = doc(collection(dataBase, "orders"));

    // later...
    await setDoc( newOrderdRef , order);     
    return newOrderdRef
};  
   
export default firebaseUploadOrder;