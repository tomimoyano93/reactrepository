import { useState } from "react";
import ItemContainer from './Containers';

const ItemListContainer = () => {
    return (
        <div class="fondoItem">
            <ItemContainer/>
        </div>
        )
    }
    
export default ItemListContainer

/*
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const productos = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripcion 1',
    stock: 5,
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripcion 2',
    stock: 8,
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripcion 3',
    stock: 15,
  },
];

const getProductos = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 3000);
});

getProductos
.then((res) => console.log(res))
.catch(err=>console.log(err))

const getFetch = new Promise((resolver, reject) => {
    setTimeout(() =>{
        resolve(productos)
},3000)
})


const ComponentePromesas = () => {
    const [product, setProduct] = useState([])
    const [state, setState] = useState(true)

    getFetch
    .then(res => {
        setProduct(res)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("esto se ejecuta si o si"))
}

console.log(product)
*/