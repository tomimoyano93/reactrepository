import {useState} from 'react'
import handleClick from '../../Item'
import ItemCount from '../../ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = (props) => {
  const {data} = props
  console.log(data, 'soy data')

  const handleClick = (total) => {
    alert(`La cantidad agregada es ${total}`)
  }

  return (
    <div>
      {data.map(value => <> 
      <div className="card w-50 mt-5 nombresProductos">
        <div className="card-header nombresProductos">
          {`${value.name} ${value.categoria}`}
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