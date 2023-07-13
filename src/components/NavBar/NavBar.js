import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar  = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
            <h2> I k e b a n a </h2>
            </link>
            
            <div className="categories"> 
                <NavLink to={`/category/plantasInterior`} className={({isActive})=> isActive ? 'ActiveOption': 'option'}> Plantas de interior </NavLink>
                <NavLink to={`/category/plantasExterior`} className={({isActive})=> isActive ? 'ActiveOption': 'option'}> Plantas de exterior </NavLink>
                <NavLink to={`/category/Accesorios`} className={({isActive})=> isActive ? 'ActiveOption': 'option'}> Accesorios </NavLink>

            </div>
            <CartWidget />
        </nav>

    )

}

export default NavBar
