
import {useEffect, useState} from 'react'
import { getFetch } from './services/GetFetch'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router';
import { getFirestore  } from '../../src/components/services/getFirestore'

const Promesa = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
       /* const db = getFirestore()
    const dbQuery = db.collection('items').get()
    dbQuery
    .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
*/
        if(id){
            getFetch
            .then( res => {        
                setProduct(res.filter(prod => prod.categoria === id))
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
        getFetch
            .then( res => {        
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
       
    },[id])   


    return (
        <>
        <h2 className="fondoItem">Productos</h2> 
        <div className="bodyList">    
             <ItemList product ={product}/>       
        </div>
        </>
    )
}

export default Promesa