import { useState, useEffect } from "react";
import ItemContainer from './Containers';
import Item from "./Item";
import ItemList from "./ItemList";



const ItemListContainer = () => {

  const[users, setUsers] = useState ([])
  console.log(users)

  const getUsers = async () => {
    const data = await fetch ("https://jsonplaceholder.typicode.com/users")
    const dataUsers = await data.json()
    setUsers(dataUsers)
  }

  useEffect(() => {
    setTimeout(() => getUsers(), 2000)
  }, [])
  
    return (
        <div class="fondoItem">
            <ItemContainer/>
            <ItemList users = {users} />
        </div>
        )
    }
    
export default ItemListContainer
