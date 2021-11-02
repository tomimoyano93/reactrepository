import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <li><Link rel="stylesheet" to='/' class="navbar-brand">Home</Link></li>
        <li><Link rel="stylesheet" to='/categoria/gorras' class="navbar-brand">Gorras</Link></li>
        <li><Link rel="stylesheet" to='/categoria/remeras' class="navbar-brand">Remeras</Link></li>
        <li><Link rel="stylesheet" to='/cart' class="navbar-brand">Cart</Link></li>
        <CartWidget/>
        
    </div>
    )
    }
    
    
    export default NavBar
