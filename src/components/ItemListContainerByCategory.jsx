import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from './services/getFirestore';
import Item from "./Item"

const ItemListContainerByCategory = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const db = getFirestore();
  const { id } = useParams()

  useEffect(() => {
    if (db && id) {
      const dbQuery = db.collection('items').where('categoria', '==', id).get()
      dbQuery
        .then(resp => setProduct(resp.docs.map(prod => ({ ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [db, id])

  return (
    <div>
      <h2 className="fondoItem">Productos x Categoria</h2>
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

export default ItemListContainerByCategory;