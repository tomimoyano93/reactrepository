import Item from "./Item"

const ItemList = ({product}) => {

  return (product.map(prod => <Item key={prod.id} prod={prod} className="bodyPagina"/>))
}

export default ItemList