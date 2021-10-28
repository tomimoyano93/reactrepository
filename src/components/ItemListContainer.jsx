/*import { useState, useEffect } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import ItemContainer from './Containers';
import { getFetch } from "./Item";
import ItemList from "./ItemList";



const ItemListContainer = () => {
  const [product,setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then(res =>{
      console.log('llamada')
      setProduct(res)
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [])
  
    return (
        <div className="fondoItem">
            <ItemContainer/>
            <ItemList/>
        </div>
        )
    }
    
export default ItemListContainer*/

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
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res.filter(prod => prod.categoria ===id))
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
        getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
       
    },[id])   

    console.log(id)
    return (
        <>
           <h2 className="fondoItem">Productos</h2>          
            {loading ? <h1 className="nombresProductos" >Cargando...</h1> : <ItemList product ={product}/>  }      
        </>
    )
}

export default Promesa
