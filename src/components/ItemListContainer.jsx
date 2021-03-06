import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../src/components/services/getFirestore';
import Item from "./Item"

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    if (db) {
      const dbQuery = db.collection('items').get()
      dbQuery
        .then(resp => setProduct(resp.docs.map(prod => ({ ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [db])

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <div>
      <h2 className="fondoItem">Productos</h2>
      <div className="bodyList">
        {loading
          ? <h1 className="nombresProductos">Cargando...</h1>
          : <React.Fragment>
            {product.map(prod =>
              <Item
                key={String(prod.id)}
                prod={prod}
              />
            )}
          </React.Fragment>
        }
      </div>
    </div>
  );
};

export default ItemListContainer;