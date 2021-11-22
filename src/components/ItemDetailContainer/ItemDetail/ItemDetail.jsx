import {useState} from 'react'
import ItemCount from '../../ItemCount' 
import { useCartContext } from '../../../context/CartContext'


const ItemDetail = (props) => {
  const [count, setCount] = useState()
  //console.log(props,'props')

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  //console.log(cartList, 'soy cartList');
  //console.log(mostrarListado);

  const onAdd =(cant)=>{
    setCount(cant)
    agregarAlCarrito({props, cantidad: cant})
  }   
 
  return (
    <div className="bodyList card">
      <div className="nombresProductos cardInterno">
        <div className="card-header nombresProductos">
          {`${props.name} ${props.description}`}
        </div>
        <div className="card-body">
          <img src={props.foto} alt=''width='200px' height='150px'/>
        </div>
        <div className="card-body"> $ {props.price}</div>
        <div className="card-body">{props.description}</div>
        <div className="card-footer">
          <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd}/>
        </div>
      </div> 
    </div>

  )
}

export default ItemDetail;