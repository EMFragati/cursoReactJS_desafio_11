import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import firebaseUploadOrder from "../utils/firebaseUploadOrder";
import firebaseDecrementProductStock from "../utils/firebaseDecrementProductStock";

const Cart = () => {
    const context = useContext( CartContext );
    let totalItemsQuantity = 0;
    let totalItemsPrice = 0;

    const createOrder = () => {
      let order = {
        buyer: {
          name: '',
          phone: '12345678',
          email: 'cursoReact_@test.com'
        },
        items: context.itemsInCart.map( item => ({
          id: item.id,
          price: item.price,
          title: item.title,
          quantity: item.quantity
        })),
        date: serverTimestamp(),
        total: totalItemsPrice
      };     
     
      firebaseUploadOrder(order)
        .then( result => alert ( `Tu orden de compra se ha generado con exito. El ticket asignado es: ${result.id}` ))
        .catch( error => console.log ( error ));
        
        context.itemsInCart.forEach( item => {
          firebaseDecrementProductStock( item.id , item.quantity );
        });        

        context.clear();
    };
    for ( let item of context.itemsInCart ) {
        totalItemsQuantity += item.quantity;
        totalItemsPrice += item.price * item.quantity;
    };   

    /*Renderizado Condicional*/    
    if ( context.itemsInCart.length === 0 ) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl">
              <span className="h1 my-3 mx-3">No tienes productos por el momento</span>
              <br/>            
              <Link to={`/`}><button type="button" className="btn btn-success">Seguir Comprando</button></Link>
            </div>
          </div>
        </div>
      )
    };

    /*Renderizado*/
    return(
        <>  
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl">
                <span className="h1 my-3 mx-3">Tus productos hasta el momento</span>
                <br/>
                <button type="button" className="btn btn-danger mx-5 my-5" onClick= { event => { context.clear() } }>Limpiar Carrito</button>              
                <Link to={`/`}><button type="button" className="btn btn-success">Seguir Comprando</button></Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 border-end mx-5">
                {
                    context.itemsInCart.map(
                      item => (                        
                        <div className="row border-top border-bottom" key={`item_id_${item.id}_list`}>
                          <div className="row my-2">
                            <div className="col-xl"><img className="itemCover" src={`${item.cover}`} alt="item.png"/></div>                            
                            <div className="col-xl"><span className="h4"> {`${item.title}`}</span></div>                            
                            <div className="col-xl"><span>Cantidad: {`${item.quantity}`}</span></div>                       
                            <div className="col-xl"><span>Precio: ${`${item.price}`}</span></div>                                                                   
                            <div className="col-xl"><button type="button" className="btn btn-danger mx-1" onClick= { event => { context.removeItem( item.id ) } }>Remover</button></div>                                                    
                          </div>
                        </div>
                      )
                    )
                  }
              </div>                
              <div className="col-xl">
              <div className="row">
              <span className="h5">Tu resumen de compra</span>         
                {
                    context.itemsInCart.map(
                      item => (
                        <div className="row" key={`item_id_${item.id}_prices`}>
                         <div className="col-sm-8">
                            <div className="row">
                              <div className="col-sm"><span> {`${item.title}`}</span></div>
                              <div className="col-sm"><span>{`${item.quantity} unidades * $${item.price} = $` }{ item.quantity * item.price } </span></div>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  }
                  <div className="row" key={`item_id_prices_total`}>                            
                    <div className="col-sm-8 my-2">
                      <div className="row border-top">
                        <div className="col-sm my-2"><span>Total:</span></div>
                        <div className="col-sm my-2"><strong>${totalItemsPrice}</strong></div>
                      </div>
                      <div className="row">
                        <div className="col-sms">
                          <button type="button" className="btn btn-success mx-5 my-5" onClick= { event => { createOrder() } }>Confirmar Compra</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>   

            </div>         
          </div>        
        </div>
      </>
    )
};

export default Cart;