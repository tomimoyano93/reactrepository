import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { getFetchUnProducto } from '../services/GetFetch'


const ItemDetailContainer = () => {
const [prod, setProd] = useState({})
    useEffect(() => {
        getFetchUnProducto
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))
    },[])
console.log(prod)
    return (
        <>
            <ItemDetail/>
        </>
    )
}

export default ItemDetailContainer
