
import {useEffect, useState} from 'react'
import { getFetch } from './services/GetFetch'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router';

const Promesa = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
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
            {loading ? <h1 className="nombresProductos" >Cargando...</h1> : <ItemList product ={product}/>  }      
        </div>
        </>
    )
}

export default Promesa