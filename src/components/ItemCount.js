import { React, useState } from "react";

const ItemCount= ( { stockLimit , onAdd } ) => {
   
    /*Nota: Esto se conoce como "Desestructuracion de arrays". El hook useState() devuelve un array de dos elementos,
     de esta fomra estoy declarando 2 variables en orden con los valores de ese array*/
    const [ counter , setCounter ] =  useState(0);
    const [ stock , setStock ] =  useState(stockLimit - counter);
    
    const incrementCounter = () => {      

        if ( counter < stockLimit ) {
            setStock ( stock - 1 );
            setCounter ( counter + 1 );            
        } else {
            setCounter ( stockLimit );
        };       
    };

    const decreaseCounter = () => { 

        if ( counter > 0 ) {
            setStock ( stock + 1 );
            setCounter ( counter - 1 );            
        } else {
            setCounter (0);
        };        
    };    
    
    /*Renderizado*/
    return(
        <>           
            <div className="contanier">         

                <div className="row justify-content-md-right">
                    <div className="col-12">
                        <br/>                        
                        <button type="button" className="btn btn-primary mx-1" onClick={ decreaseCounter }><strong>-</strong></button>                            
                        <span>{ counter }</span>
                        <button type="button" className="btn btn-primary mx-1" onClick={ incrementCounter }><strong>+</strong></button>                        
                        <button type="button" className="btn btn-primary mx-1" onClick={ event => { onAdd( event , counter ) } }>Agregar al Carrito</button>                          
                    </div>                                     
                    <div className="col-8 my-2">Unidades en stock: {stock}</div>   
                </div>
                
            </div>
        </>
    )
};

export default ItemCount;