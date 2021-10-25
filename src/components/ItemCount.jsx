import React, {useState} from "react";
import {Button,InputGroup,FormControl } from "react-bootstrap";

export default function ItemCount({stock,initial, onAdd}){
    const[contador,setContador] = useState(initial);



    const disminuiClick=() => {
        contador > 1 ? setContador(contador-1) : alert("No es posible elegir menos que 1") 
    }

    const aumentarClick = () => {
        contador < parseInt(stock) ? setContador(contador+1) : alert(`La cantidad elegida es ${stock}`)
    }

    return(
        <div>
            <InputGroup classname="mb-3">
                <Button variant="outline-primary" onClick={disminuiClick} disabled={contador < 1}> - </Button>
                <FormControl value={contador}/>
                <Button onClick={aumentarClick}> + </Button>
            </InputGroup>
            <Button onClick={() => onAdd(contador)}> Agregar al carrito </Button>
        </div>
    )
}
