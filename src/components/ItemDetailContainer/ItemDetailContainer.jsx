import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import {getFetch} from '../services/GetFetch'
import {useParams} from 'react-router'
import { getFirestore } from '../services/getFirestore'

const ItemDetailContainer = () => {
  const [prod,setProd] = useState({})
  const [loading,setLoading] = useState(true)
  const {id2} = useParams(prod);

  useEffect(() => {
  const db = getFirestore()
    db.collection('items').doc(id2).get()
    .then(resp => setProd({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    /*
    getFetch.then(res => {
      //console.log(res, 'soy prods2')
      setProd(res.find(prod => prod.id === id2))
    })
      .catch(err => console.log(err))
      . finally(() => setLoading(false))*/
  }, [id2])

  return ( <> 
    <h2 className="fondoItem">Curso</h2> {loading?
    <h1 className="nombresProductos">Cargando...</h1>
    :
    <div className = "bodyList" > <ItemDetail props={prod}/> </div>}
     </>)
}

export default ItemDetailContainer

/*{loading? 
  <h1 className="nombresProductos">Cargando...</h1>
  : 
  <ItemDetail props={prod}/>
}*/