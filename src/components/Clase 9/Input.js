import React from "react";

export const Input = () => {
    const inputHandler = (event) =>{
        console.log(event.nativeEvent)
        event.preventDefault()
        event.stopPropagation()
    
    }
    return (
        <div>
            <div>
                <input onClick={inputHandler}></input>
            </div>
        </div>
    )
}

/*import React from "react";
import "./style.css";

export default function App() {
  const handleOnKeyDown = (e) =>{
    console.log(e.key);

    const vocales = ['a', 'e', 'i', 'o', 'u'];

    const resultado = vocales.filter(vocal => vocal === e.key);

    if(resultado.length > 0){
      e.preventDefault();
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input onKeyDown={ handleOnKeyDown }/>
    </div>
  );
};*/