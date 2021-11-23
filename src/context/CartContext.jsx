import {createContext, useState, useContext} from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({children}) => {
  const [cartList,setCartList] = useState([])

  const agregarAlCarrito = (props) => {
    const isInCart = cartList.find(prod=> prod.props.id === props.props.id)
    if(isInCart){
      isInCart.cantidad += props.cantidad
    }else{
        setCartList([
            ...cartList,
            props
        ])

    }
  }

  const sumatoriaFinal = () => {
    return cartList.reduce((acum, value) => acum + (value.cantidad * value.props.price), 0)
  }

  const mostrarListado = () => {
    console.log(cartList)
  }

  const borrarListado = () => {
    setCartList([])
  }

  const borrarItem = (id) => {
    
    setCartList(cartList.filter(prod => prod.props.id !== id))
    console.log(id)
}

  return (
    <CartContext.Provider
      value={{
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
