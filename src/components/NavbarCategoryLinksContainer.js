import productCategories from '../database/productCategories';
import NavBarCategoryLink from './NavBarCategoryLink';

/*Este contenedor de categorias consulta a la base de datos y genera los links de forma dinamica*/
/*Agrego el prop key para evitar problemas con React al usar la funcion map*/

const NavbarCategoryLinksContainer = () => {    
    /*Renderizado*/
    return(
        <>
            {
                productCategories.map( category => ( 
                    <NavBarCategoryLink key={ `navbar_category_${category.toLowerCase()}`} categoryId={category.toLowerCase()} />
                ))
            }            
        </>
    )
};

export default NavbarCategoryLinksContainer;