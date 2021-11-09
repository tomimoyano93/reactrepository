import React, {useState} from "react";
import {Button,InputGroup,FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function ItemCount({stock,initial, onAdd}){
    const[contador,setContador] = useState(initial);
    const [cambiarBoton, setCambiarBoton] =  useState(false);

    const disminuiClick=() => {
        contador > 1 ? setContador(contador-1) : alert("No es posible elegir menos que 1") 
    }

    const aumentarClick = () => {
        contador < stock ? setContador(contador+1) : alert(`La cantidad elegida es ${stock}`)
    }

    const handlerOnAdd =() =>{
        alert(`La cantidad agregada es ${contador}`)
        onAdd(contador)
        setContador(initial)
        setCambiarBoton(true)
    
    }
    return(
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuiClick} disabled={contador < 1}> - </Button>
                <FormControl value={contador}/>
                <Button onClick={aumentarClick}> + </Button>
            </InputGroup>
            { cambiarBoton ?
            <Link to='/cart'>
                <button>Terminar Compra</button>
            </Link>
            :
            <Button onClick={handlerOnAdd}> Agregar al carrito </Button>
        }   
        </div>
    )
}
