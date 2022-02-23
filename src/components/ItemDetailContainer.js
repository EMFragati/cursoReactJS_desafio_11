import { React, useEffect , useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import firebaseFetch from "../utils/firebaseFetch";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  /*Estados de la componente*/
    const [ item , setItem ] = useState();   
    const itemId = useParams().id;

    /*Fases de vida: montage y actualizacion*/;
    useEffect(() => {          

      /*Consulto a la base de datos y obtengo todos los productos*/
      firebaseFetch( "products" , true , itemId )            
        .then( response => setItem(response))
        .catch( error => console.log(error));

  }, [ itemId ]);

  /*Renderizado Condicional*/
    /*Si tengo un item lo muestro, si no, significo que el customFetch no termino. En ese caso, visualizo un spinner con el mensaje "Cargando..."*/
    
    let content = <><Spinner/></>;   
    if ( item !== undefined ) { 
        content = <><ItemDetail item={item}/></> 
    };

  /*Renderizado*/;
     return( 
        <>   
          <div className="my-5">     
           { content }         
           </div> 
        </> 
    )
};

export default ItemDetailContainer;