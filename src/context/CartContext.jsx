import {createContext, useState, useContext} from "react";


const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([])
    
    function agregarAlCarrito(items){
        setCartList([
            ... cartList,
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

    const carritoRepetido = (prod) => {
        setCartList((prev) => {
          // Search the item in the array
          const enElCarrito = prev.find((i) => i.props.id === prod.props.id);
          if (enElCarrito) {
            return prev.map((i) =>
              i.id === prod.id ? { ...i, amount: i.amount + 1 } : i
            );
          }
          return [...prev, { ...prod, amount: 1 }];
        });
      };
      
      const sumatoriaCarrito = () =>{
        
      }
    
    return(
        <CartContext.Provider value ={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            sumatoriaFinal,
            borrarListado,
            borrarItem,
            carritoRepetido
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
