import Item from "./Item"

const ItemList = ({product}) => {
 
    return(
       product.map(prod => <Item key={prod.id} prod={prod}/>)
        )
}

export default ItemList