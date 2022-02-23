import { Link } from 'react-router-dom';

const NavBarCategoryLink = ( { categoryId} ) => {    
    /*Renderizado*/
    return(
        <>
            <Link to={`/category/${categoryId}`} className="nav-link active">{categoryId}</Link>                                
        </>
    )
};

export default NavBarCategoryLink;