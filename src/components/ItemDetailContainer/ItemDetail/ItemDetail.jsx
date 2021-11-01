import {useState} from 'react'



const ItemDetail = (props) => {
    const {data} = props
    console.log(data,'soy data')
    console.log(data.name, 'nombre')

   
    return (
       <div>
           {data.map(value=> <div><h2 style={{color:'white'}}> {value.name} </h2></div>)}
           <h1 style={{color:'white'}}>aca estoy</h1>
           
       </div>
        
    )
}

export default ItemDetail
 
