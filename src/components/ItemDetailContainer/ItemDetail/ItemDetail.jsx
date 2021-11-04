import {useState} from 'react'
import handleClick from '../../Item'
import ItemCount from '../../ItemCount'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { useCartContext } from '../../../context/CartContext'


const ItemDetail = (props) => {
  const [count, setCount] = useState(0)
  const {data} = props
  console.log(data, 'soy data')

  const handleClick = (total) => {
    alert(`La cantidad agregada es ${total}`)
  }

  const {cartList, mostrarListado,agregarAlCarrito} = useCartContext()
  console.log(cartList);
  console.log(mostrarListado);

  const onAdd =(cant)=>{
    setCount(cant)
    agregarAlCarrito({props,cantidad:cant})
  }

  return (
    <div className="bodyList">
      {data.map(value => <> 
      <div className="card w-50 mt-5 nombresProductos">
        <div className="card-header nombresProductos">
          {`${value.name}`}
        </div>
        <div className="card-body">
          <img src={value.foto} alt='' width='200px'/>
        </div>
        <div className="card-body">{value.price}</div>
        <div className="card-body">{value.description}</div>
        <div className="card-footer">
          <ItemCount stock={value.stock} initial={value.initial} onAdd={handleClick}/>
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