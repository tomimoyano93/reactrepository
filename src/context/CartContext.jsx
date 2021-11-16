import {createContext, useState, useContext} from "react";


const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([])
    
    
const agregarAlCarrito = (props, quantity) =>{
        const index = cartList.findIndex(i => i.props.id === props.id)
        console.log(index,'cart')
        if(index > -1){
             const oldQy = cartList[index].quantity
             cartList.splice(index, 1)
             setCartList([...cartList, {props, quantity: quantity + oldQy}])
            
        }else{
            setCartList([...cartList, props])}
    }

    const sumatoriaFinal = () =>{
       return cartList.reduce((acum,value) => acum + (value.cantidad * value.props.price), 0)  
    }

    const mostrarListado = () =>{
        console.log(cartList)
    }

    const borrarListado = () =>{
        setCartList([])
    }

    const borrarItem = (id) =>{
        setCartList(cartList.filter((prod) => prod.props.id !== id))
    }

    return(
        <CartContext.Provider value ={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            sumatoriaFinal,
            borrarListado,
            borrarItem,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
