import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { getFirestore } from '../services/getFirestore';

const ItemDetailContainer = () => {
  const [prod, setProd] = useState()
  const [loading, setLoading] = useState(true)
  const db = getFirestore()
  const { id2 } = useParams();

  useEffect(() => {
    if (db && id2) {
      const dbQuery = db.collection('items').get()
      dbQuery
        .then(resp => {
          let items = resp.docs.map(prod => ({ ...prod.data() }));
          let item = items.find(prod => prod.id == id2)
          setProd(item);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [db, id2])

  return (
    <>
      <h2 className="fondoItem">Curso</h2>
      {loading
        ? <h1 className="nombresProductos">Cargando...</h1>
        : <div className="bodyList" >
          <ItemDetail {...prod} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer;