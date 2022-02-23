import ItemCount from './ItemCount';
import { React, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext }  from "./CartContext";

const ItemDetail = ( { item } ) => {
   
    const [ numberOfItemsAdded , setNumberOfItemsAdded ] = useState(0);
    const [ stockLimit , setStockLimit ] = useState(item.data.stock);

    const context = useContext( CartContext ); 

    const onAdd = ( event , number ) => {
        event.stopPropagation();        
        if ( number > 0 ){                        
            setNumberOfItemsAdded( number );            
            context.addItem( item, number );
        };
    };
   
    let conditionalContent;
    if ( stockLimit === 0 ) { conditionalContent = <div className="row"><strong>¡AGOTADO!</strong></div> }
    else if ( numberOfItemsAdded > 0 ) { conditionalContent = <Link to={`/cart`}><button type="button" className="btn btn-success">Inspeccionar mi compra</button></Link> }
    else { conditionalContent = <div className="row"><ItemCount stockLimit={stockLimit} onAdd={onAdd}/></div> };    

    /*Renderizado*/;
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src={item.data.cover} alt='img'/>
                    </div>
                    <div className="col-4">                        
                        <div className="row"><p className="h1">{item.data.name}</p></div>
                        <div className="row">{item.data.description}</div>
                        <div className="row mt-4"><strong>Precio: {item.data.price}</strong></div>                        
                        {conditionalContent}
                    </div>
                </div>
            </div>
        </>
    )
  };
  
  export default ItemDetail;