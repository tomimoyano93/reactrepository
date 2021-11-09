import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import {getFetch} from '../services/GetFetch'
import {useParams} from 'react-router'

const ItemDetailContainer = () => {
  const [prod,setProd] = useState({})
  const [loading,setLoading] = useState(true)
  const {id2} = useParams(prod);

  useEffect(() => {
    getFetch.then(res => {
      //console.log(res, 'soy prods2')
      setProd(res.filter(prod => prod.id == id2))
    })
      .catch(err => console.log(err))
      . finally(() => setLoading(false))
  }, [id2])

  return ( <> 
    <h2 className="fondoItem">Curso</h2> 
    < div className = "bodyList" > {loading? 
      <h1 className="nombresProductos">Cargando...</h1>
      : 
      <ItemDetail data={prod}/>
  } </div>
     </>)
}

export default ItemDetailContainer