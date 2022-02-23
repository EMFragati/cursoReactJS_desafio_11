import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import NavbarCategoryLinksContainer from './NavbarCategoryLinksContainer';

const NavBar = () => {
    /*Renderizado*/
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-xl navbar-light bg-primary">
                    <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><strong className='h4'>Manga Storm</strong></Link>
                        <div className="collapse navbar-collapse show">
                            <div className="navbar-nav">                                               
                            <NavbarCategoryLinksContainer/>
                            <Link to="/cart" className="navbar-brand"><CartWidget/></Link>
                            </div>
                        </div>
                    </div>
                </nav>   
            </header>
        </>
    )
};

export default NavBar;