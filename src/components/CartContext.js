import { useState, createContext } from "react";

//Ayuda memoria: es necesario declarar este CartContext para el momento de armar las etiquetas en el return final donde se tiene [CartContext].Provider
export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    
    const [ itemsInCart , setItemsInCart ] = useState([]);        

    const addItem = ( item , quantity ) => {
        //Si el item ya esta en el carrito, no agrego nada y salgo

        if ( isInCart( item.id ) ) { return false };
        let currentItems = itemsInCart.map ( anItem => anItem );
        currentItems.push( { id: item.id , price: item.data.price , quantity: quantity , cover: item.data.cover , title: item.data.id } );
        setItemsInCart( currentItems );       

        return true;
    };

    const removeItem = ( itemId ) => {
        let currentItems = itemsInCart.filter( item => item.id !== itemId );       
        setItemsInCart ( currentItems );
    };

    const clear = () => { 
        setItemsInCart( [] );
    };    

    const isInCart = ( id ) => {
        let anItems = itemsInCart;
        if ( anItems.find( item => item.id === id ) ) { return true };
        return false;
    };    

    //Ayuda memoria: El prop "value" indica que valores se van a mostrar para todas las componentes dentro del contexto
    return (
      <CartContext.Provider value={ { itemsInCart , addItem , removeItem , clear , isInCart , } }>
        {children}
      </CartContext.Provider>  
    );
};

export default CartContextProvider




