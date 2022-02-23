import Item from './Item';
import Spinner from "./Spinner";

const ItemList = ( { items } ) => {   
    /*Renderizado Condicional*/ 
    /*Si tengo items que mostrar los agrego a la lista, si no, muestro un spinner*/

      let content = <><Spinner/></>;
      if ( items ) {
          content =      
            <div className="container">
                <div className="row">        
                    <div className="col-12 d-flex flex-wrap">
                        {
                            items.map( product => ( 
                                <Item 
                                    key={product.id}
                                    id={product.id}
                                    cover={product.data.cover}
                                />         
                            ))
                        }
                    </div>
                </div>
            </div>
      };

    /*Renderizado*/;
    return(
        <> 
            {content}
        </>
    )
};


export default ItemList;