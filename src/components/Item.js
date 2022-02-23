import { Link } from 'react-router-dom';

const Item = ( { id, cover } ) => {    
    /*Renderizado*/
    return(
        <>                   
            <Link to={`/item/${id}`} className="contanier itemContainer mx-2 my-2">
                <img className="itemCover" src={cover} alt="item.png"/>
            </Link>                        
        </>
    )
};

export default Item;
