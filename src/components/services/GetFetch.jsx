
const productos = [
    {
      id: 1,
      name: 'Curso Aleman',
      description: 'Nivel 1',
      price: '$500',
      stock: 5,
      initial: 1,
      foto:'assets/img/brandemburgo.jpg',
      categoria: 'Aleman'
    },
    {
      id: 2,
      name: 'Curso Aleman',
      description: 'Nivel 2',
      price: '$500',
      stock: 8,
      initial: 1,
      foto:'assets/img/brandemburgo.jpg',
      categoria: 'Aleman'
    },
    {
      id: 3,
      name: 'Curso Frances',
      description: 'Nivel 1',
      price: '$500',
      stock: 15,
      initial: 1,
      foto:'assets/img/torreEifel.jpg',
      categoria: 'Frances'
    },
    {
      id: 4,
      name: 'Curso Frances',
      description: 'Nivel 2',
      price: '$500',
      stock: 15,
      initial: 1,
      foto:'assets/img/torreEifel.jpg',
      categoria: 'Frances'
    },
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