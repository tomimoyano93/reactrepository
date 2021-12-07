import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import firebase from "firebase"
import 'firebase/firestore'
import {getFirestore} from '../services/getFirestore'



const Cart = () => {
    const [idOrder, setIdOrder] = useState('') 
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
    const {cartList, sumatoriaFinal, borrarItem, borrarListado} = useCartContext()

    const generarOrden = (e) =>{
        e.preventDefault()        
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
        orden.buyer = formData
        orden.total = sumatoriaFinal();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.props.id;
            const name = cartItem.props.name;
            const price = cartItem.props.price * cartItem.cantidad;
            
            return {id, name, price}   
        })
        
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))
        .finally(()=> setFormData({
            name:'',
            phone:'',
            email: ''
        }))
    /*
    const itemsToUpdate = dbQuery.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
    )
        
    const batch = dbQuery.batch();
    
    itemsToUpdate.get()
    .then(collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
            })
        })

        batch.commit().then(res =>{
            console.log('resultado batch:', res)
        })
    })*/}

    const handleChange=(e)=>{
        setFormData({
             ...formData, 
             [e.target.name]: e.target.value
         })
     }
 
console.log(cartList)
    
    
      
    return (
        <div className="bodyList card">
            <div>
            {cartList.length === 0  ?
                <div>
                    <h1 className="nombresProductos">No has seleccionado ningun libro!</h1>
                    Hace click 
                    <Link to="/" >
                        Acá
                    </Link>
                    y selecciona uno !
                </div>
                : 
                <div>
                {cartList.map((value) => <> 
                <div className="nombresProductos cardInterno">
                    <div className="card-header nombresProductos">
                    {`${value.props.name}`} - 
                    {`${value.props.description}`}
                    </div>
                    <div className="card-body">
                        <img src={`${value.props.foto}`} alt=''width='200px' height='150px'/>
                    </div>
                    <div className="card-body">$ {`${value.props.price}`}</div>
                    <button onClick={() => borrarItem(value.props.id)}>Eliminar</button>
                    <div className="card-body titulos"> Cantidad: {`${value.cantidad}`} </div>
                </div> 
                </>)}
                
                <div>
                    <div className='titulos'>
                        {`Total: $ ${sumatoriaFinal()}`}
                    </div>
                    <button onClick={() => borrarListado()}>Eliminar</button>
                    <section>
                        {idOrder !==''&& <label className="nombresProductos"> El id de su orden es : {idOrder}</label>}
                    </section>
                    <form onSubmit={generarOrden} onChange={handleChange}>
                        <input type='text' name='name' placeholder='name' value={formData.name}/>
                        <input type='text' name='phone'placeholder='tel' value={formData.phone}/>
                        <input type='email' name='email'placeholder='email' value={formData.email}/>
                        <button >Enviar</button>
                    </form>
                    
                </div>
                </div>
            } </div>
        </div>
    )
}

export default Cart
/**/
