import {useState} from 'react'
import ItemCount from '../../ItemCount' 
import { useCartContext } from '../../../context/CartContext'






const ItemDetail = (props) => {
  const [count, setCount] = useState(0)
  const {data} = props

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  //console.log(cartList, 'soy cartList');
  //console.log(mostrarListado);

  const onAdd =(cant)=>{
    setCount(cant)
    agregarAlCarrito({data, cantidad: cant})
  }   
 //console.log(count, data)


  return (
    <div className="bodyList card">
      {data.map(value => <> 
      <div className="nombresProductos cardInterno">
        <div className="card-header nombresProductos">
          {`${value.name}`}
        </div>
        <div className="card-body">
          <img src={value.foto} alt=''width='200px' height='150px'/>
        </div>
        <div className="card-body">{value.price}</div>
        <div className="card-body">{value.description}</div>
        <div className="card-footer">
          <ItemCount stock={value.stock} initial={value.initial} onAdd={onAdd}/>
        </div>
      </div> </>)}
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