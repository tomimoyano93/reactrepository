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
import { getFetch } from './services/Item'
import ItemCount from './ItemCount'

const Promesa = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
       
       
    },[])   

    const handleClick =(total) => {
        alert(`La cantidad agregada es ${total}`)
    }
  
 
    console.log(product)
    return (
        <>
           <h2 className="fondoItem">Productos</h2>          
            
            { loading ? <h1 className="nombresProductos" >Cargando...</h1> :         
                    product.map(prod=> <div key={prod.id} className="card w-50 mt-5 nombresProductos" >
                                                <div className="card-header nombresProductos">
                                                    {prod.name}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' />
                                                </div>
                                                <div className="card-body">
                                                </div>
                                                {prod.price}
                                                <div className="card-footer">
                                                <ItemCount stock={prod.stock} initial={prod.initial} onAdd={handleClick}/>
                                                </div>
                    
                                          </div>
            )
            }
        </>
    )
}

export default Promesa
