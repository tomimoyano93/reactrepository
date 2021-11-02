import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { getFetch } from '../services/GetFetch'


const ItemDetailContainer = () => {
const [prod, setProd] = useState({})
const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {         
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])
console.log(prod)
    return (
        <>
        <h2 className="fondoItem">Detalle</h2> 
        <div className="bodyList">          
         {loading ? <h1 className="nombresProductos" >Cargando...</h1> : <ItemDetail data={prod}/>  }      
         </div>
     </>
    )
}

export default ItemDetailContainer