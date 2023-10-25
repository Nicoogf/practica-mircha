import React from 'react' ;
import PropTypes from "prop-types"

const Propiedades = ( props ) => {
  return (
    <div> 
        {props.porDefecto } 
        <ul>
            <li> {props.cadena} </li>
            <li> {props.numero} </li>
            <li> {props.booleano ? "La variable fue VERDADERA" : "La variable es FALSA"} </li>
            <li> {props.arreglo.join(",") }</li>
            <li> {props.objeto.nombre +"  "+props.objeto.apellido + " " + props.objeto.email }</li>
            <li> {props.arreglo.map( props.funcion ).join(",")}</li>
            <li> {props.elemento} </li>
            <li> {props.componenteReact} </li>
        </ul>
    </div>

  )
}

Propiedades.defaultProps = {
    porDefecto : "Default de Propiedad"
}
Propiedades.propTypes={
    cadena : PropTypes.string
}

export default Propiedades