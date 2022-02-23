import { useEffect , useState } from "react";
import React from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import firebaseFetch from "../utils/firebaseFetch";

const ItemListContainer = () => {
    /*Estados de la componente*/      
      const [ productsToShow , setProductsToShow ] = useState([]);
      const categoryId = useParams().categoryId;

    /*Fases de vida: montage y actualizacion*/;
      useEffect(() => {         

          /*Aplico un filtro segun si tengo identificada una categoria o no*/
          const filterProducts = ( products ) => {             
            if ( categoryId ) { return products.filter( product => product.data.category === categoryId ) }
            return products;              
          };    

          /*Consulto a la base de datos y obtengo todos los productos*/
          firebaseFetch( "products" , false )            
            .then( response => setProductsToShow(filterProducts(response)))
            .catch( error => console.log(error));

      }, [ categoryId ]);
      
    /*Renderizado*/;
       return( 
          <>          
              <div className="elementsContainer">
                <ItemList items={productsToShow}/>
              </div>
          </> 
      )
  };
  
  export default ItemListContainer;