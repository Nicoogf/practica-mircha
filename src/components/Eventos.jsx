import React , {Component} from 'react'
import { render } from 'react-dom';

export default class Evento extends Component {

    constructor( props ){
        super( props );
        this.state = {
            contador : 0 ,
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        console.log("Sumando")
        this.setState({
            contador : this.state.contador + 1 
        })
    }

    restar(e){
        console.log("Restando")
        this.setState({
            contador : this.state.contador - 1 
        })
    }
    render() {
        return(
            <div>
                <h2> Eventos en componentes de Clase </h2>

                <div>
                    <button onClick={ this.restar }> Restar </button>
                    <button onClick={ this.sumar }> Sumar </button>
               </div>

               <h3> {this.state.contador} </h3>
               
            </div>
        )
    }
}

export class MasSobreEventos extends Component{
    handleClick = (e , mensaje ) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(mensaje)
    }
    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={ (e) => this.handleClick(e , "Hola Por parametro") }>Saludar</button>
            </div>
        )
        } 
    }