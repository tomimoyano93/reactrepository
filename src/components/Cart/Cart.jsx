import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'


const Cart = () => {
    const {cartList} = useCartContext()
    console.log(cartList, 'Estoy en el carrito')

    const eliminarItem = () =>{
        
    }


    return (
        <div className="bodyList card">
            {cartList.map((value) => <> 
            <div className="nombresProductos cardInterno">
                <h2>{`${value.name}`}</h2>
            </div> 
            <Link >
                <button onClick={eliminarItem}>Eliminar</button>
            </Link>
            </>)}
        </div>
    )
}

export default Cart

