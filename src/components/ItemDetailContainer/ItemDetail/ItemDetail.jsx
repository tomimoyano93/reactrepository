import {useState} from 'react'



const ItemDetail = (props) => {
    const {data} = props
    console.log(data,'soy data')
    console.log(data.name, 'nombre')

   
    return (
       <div>
           {data.map(value=> 
            <>
                <h2>{value.name}</h2>
            </>
           )}
           
           
       </div>
        
    )
}

export default ItemDetail
 
