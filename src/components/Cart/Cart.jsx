import React, { useState } from 'react'
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
                <div className="card-header nombresProductos">
                {`${value.props.name}`}
                </div>
                <div className="card-body">
                    <img src={`${value.props.foto}`} alt=''width='200px' height='150px'/>
                </div>
                <div className="card-body">{`${value.props.price}`}</div>
                <div className="card-body">{`${value.props.description}`}</div>
                <Link >
                <button onClick={eliminarItem}>Eliminar</button>
            </Link>
            </div> 
            </>)}
            <h2 className='titulos'>Total</h2>
        </div>
    )
}

export default Cart

