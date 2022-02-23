import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "./firebaseConfig";

 /*Conexion a la base de datos por medio de firebase*/
const firebaseFetch = async ( document , booleanSingleResult , documentId ) => { 

  //obtencion simple: un documento a la vez
  if ( booleanSingleResult ) {    
      const docRef = doc(dataBase, document, documentId );
      const item = await getDoc(docRef);

      //Si el documento existe, retorno su informacion
      if ( item.exists()) {
        return ({
          id: item.id,
          data: item.data()
        });        
      };
    
      //Si el documento no existe, termina con error
      console.log("No such document!");    
  };

  //Obtencion multiple
    const querySnapshot = await getDocs(collection(dataBase, document ));
    const dataFromFirebase = querySnapshot.docs.map( item =>  ({
      id: item.id,
      data: item.data()
    }));   

    return dataFromFirebase;
};

 
 export default firebaseFetch;