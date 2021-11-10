import {useState} from 'react'
import ItemCount from '../../ItemCount' 
import { useCartContext } from '../../../context/CartContext'


const ItemDetail = ({props}) => {
  const [count, setCount] = useState(0)
  

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  //console.log(cartList, 'soy cartList');
  //console.log(mostrarListado);

  const onAdd =(cant)=>{
    setCount(cant)
    agregarAlCarrito({props, cantidad: cant})
  }   
 //console.log(count, props)


  return (
    <div className="bodyList card">
      <div className="nombresProductos cardInterno">
        <div className="card-header nombresProductos">
          {props.name}
        </div>
        <div className="card-body">
          <img src={props.foto} alt=''width='200px' height='150px'/>
        </div>
        <div className="card-body">{props.price}</div>
        <div className="card-body">{props.description}</div>
        <div className="card-footer">
          <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd}/>
        </div>
      </div> 
    </div>

  )
}

export default ItemDetail

/*    useEffect(() => {
        getFetch
        .then( res => {         
            setProd(res.find(prod => prod.id === productoID))
        })    
        .catch(err => alert("Error: ", err))
        .finally(()=> setLoading(false))
    },[productoID])*/