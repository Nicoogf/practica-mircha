import React, { useState } from 'react'

const UseStateHook = ( props ) => {
const [ valor , setValor ] = useState(0) ; 
    console.log(useState())

const sumar = () => {
    setValor( valor + 1 )
}

const restar = () => {
    setValor ( valor - 1 )
} 

return (
    <div>
        <h1> Hook useState ()  </h1>
        <div>
            <button onClick={ restar }> - </button>
            <h6>  Contador </h6>
            <h3> { props.titulo }</h3>
            <h2> { valor } </h2>
            <button onClick={ sumar }> + </button>
        </div>
    </div>
  )
}

export default UseStateHook

UseStateHook.defaultProps = {
    titulo : "Variable por Default"
}