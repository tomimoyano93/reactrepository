
const productos = [
    {
      id: 1,
      name: 'Gorra',
      description: 'Bucket',
      price: '$500',
      stock: 5,
      initial: 1,
      foto:'assets/img/gorras.png'
    },
    {
      id: 2,
      name: 'Gorra',
      description: 'Panama',
      price: '$500',
      stock: 8,
      initial: 1,
      foto:'assets/img/gorras.png'
    },
    {
      id: 3,
      name: 'Gorra',
      description: 'Fedora',
      price: '$500',
      stock: 15,
      initial: 1,
      foto:'assets/img/gorras.png'
    },
  ];

export const getFetch = new Promise((resolve,reject) => {
  setTimeout(() =>{
    resolve(productos) 
  }, 2000)
})