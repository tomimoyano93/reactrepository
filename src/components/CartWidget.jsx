import { useCartContext } from '../context/CartContext';
import React from 'react';

const CartWidget = () => {
    const { cantidadCarrito } = useCartContext()
    return (
        <div>
            <img className="carritoNav" src="assets/img/carrito.png"/>
            <div className="card-body navbar-brand">{`${cantidadCarrito()}`}</div>
        </div>
    )
}
    
export default CartWidget