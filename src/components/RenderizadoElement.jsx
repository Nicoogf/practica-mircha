import React , {Component} from 'react' ;
import data from "../helpers/data.json" ;

function ElementoLista ( props ) {
    return(
        <li>
            <a href={props.el.web} target='_blank'> {props.el.name} </a>
        </li>
    )
}

export default class RenderizadoElemento extends Component {
    constructor(props){
        super(props)
        this.state = {
            seasons : ['Primavera' , 'Verano' , 'Otoño' , 'Invierno']
        }
    }
    render(){
        console.log(data )
        return(
            <div>
                <h1>Elemento</h1>
                <h3> Estacion del año</h3>
                <ol>
                    {
                        this.state.seasons.map( (elemento , index ) => <li key={index}> { elemento } </li>)
                    }
                </ol>
                <h3>Frameworks Frontend</h3>
                <ul>
                    {data.frameworks.map( (elemento  ) => <ElementoLista key={ elemento.id } el={elemento} /> )}
                </ul>
            </div>
        )
    }
}