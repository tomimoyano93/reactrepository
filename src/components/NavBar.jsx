import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <div>
        <li><Link rel="stylesheet" to='/'>Home</Link></li>
        <li><Link rel="stylesheet" to='/categoria'>Categoria</Link></li>
        <li><Link rel="stylesheet" to='/categoria/gorras'>Gorras</Link></li>
        <li><Link rel="stylesheet" to='/categoria/remeras'>Remeras</Link></li>
        <li><Link rel="stylesheet" to='/'>Cart</Link></li>
        <CartWidget/>
        
    </div>
    )
    }
    
    
    export default NavBar
