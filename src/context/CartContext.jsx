import {createContext, useState, useContext} from "react";


const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([])
    
    function agregarAlCarrito(items){
        setCartList([
            ...cartList,
            items
        ])
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
            borrarItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
