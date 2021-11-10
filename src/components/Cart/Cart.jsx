import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'


const Cart = () => {
    const {cartList, sumatoriaFinal, borrarItem, borrarListado} = useCartContext()
    console.log(cartList, 'Estoy en el carrito')
      
    return (
        <div className="bodyList card">
            {cartList.map((value) => <> 
            <div className="nombresProductos cardInterno">
                <div className="card-header nombresProductos">
                {`${value.props.name}`} - 
                {`${value.props.description}`}
                </div>
                <div className="card-body">
                    <img src={`${value.props.foto}`} alt=''width='200px' height='150px'/>
                </div>
                <div className="card-body">$ {`${value.props.price}`}</div>
                <div className="card-body titulos"> Cantidad: {`${value.cantidad}`} </div>
            </div> 
            </>)}
            <div>
                <div className='titulos'>
                    {`Total: $ ${sumatoriaFinal()}`}
                </div>
                <button onClick={() => borrarListado()}>Eliminar</button>
            </div>
        </div>
    )
}

export default Cart

