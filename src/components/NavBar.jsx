import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <img className="logo" src="assets/img/berlin_transparente.png"/>
        <li><Link rel="stylesheet" to='/' class="navbar-brand">Home</Link></li>
        <li><Link rel="stylesheet" to='/categoria/Aleman' class="navbar-brand">Aleman</Link></li>
        <li><Link rel="stylesheet" to='/categoria/Frances' class="navbar-brand">Frances</Link></li>
        <li><Link rel="stylesheet" to='/categoria/Italiano' class="navbar-brand">Italiano</Link></li>
        
        <li><Link rel="stylesheet" to='/cart' class="navbar-brand">Cart</Link></li>
        <CartWidget/>
    </div>
    )
    }
    
    
    export default NavBar
