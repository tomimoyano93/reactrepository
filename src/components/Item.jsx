import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {

    const handleClick =(total) => {
        alert(`La cantidad agregada es ${total}`)
    }
    return (
         <div className="card w-50 mt-5 nombresProductos" >
                                                <div className="card-header nombresProductos">
                                                    {`${prod.name} ${prod.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' />
                                                </div>
                                                <div className="card-body">
                                                </div>
                                                {prod.price}
                                                <div className="card-footer">
                                                <ItemCount stock={prod.stock} initial={prod.initial} onAdd={handleClick}/>
                                                </div>
                                                <Link>
                                                <button to='/detalle'> Detalle del producto</button>
                                                </Link>
                    
            </div>
        
    )
}

export default Item
