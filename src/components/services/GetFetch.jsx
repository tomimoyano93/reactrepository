
const productos = [
    {
      id: 1,
      name: 'Remera',
      description: 'Bucket',
      price: '$500',
      stock: 5,
      initial: 1,
      foto:'assets/img/remera.jpg',
      categoria: 'remeras'
    },
    {
      id: 2,
      name: 'Remera2',
      description: 'Panama',
      price: '$500',
      stock: 8,
      initial: 1,
      foto:'assets/img/remera.jpg',
      categoria: 'remeras'
    },
    {
      id: 3,
      name: 'Gorra1',
      description: 'Fedora',
      price: '$500',
      stock: 15,
      initial: 1,
      foto:'assets/img/gorras.png',
      categoria: 'gorras'
    },
    {
      id: 4,
      name: 'Gorra2',
      description: 'Fedora',
      price: '$500',
      stock: 15,
      initial: 1,
      foto:'assets/img/gorras.png',
      categoria: 'gorras'
    }
  ];

export const getFetch = new Promise((resolve,reject) => {
  setTimeout(() =>{
    resolve(productos) 
  }, 2000)
})

const producto = [
  {
    id: 1,
    name: 'Gorro',
    description: 'Bucket',
    price: '$500',
    stock: 5,
    initial: 1,
    foto:'assets/img/gorras.png'
  },
];

export const getFetchUnProducto = new Promise((resolve,reject) => {
  setTimeout(() =>{
    resolve(producto) 
  }, 2000)
})