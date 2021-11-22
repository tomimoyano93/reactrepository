import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => (
  <div className="card w-50 mt-5 nombresProductos">
    <div className="card-header nombresProductos">
      {`${prod.name} ${prod.description}`}
    </div>
    <div className="card-body">
      <img src={prod.foto} width='200px' height='150px' />
    </div>
    <Link to={`/detalle/${prod.id}`}>Detalle del producto</Link>
  </div>
);

export default Item

