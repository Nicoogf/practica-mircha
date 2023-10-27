import React , {Component} from 'react'

export default class Evento extends Component {

    constructor( props ){
        super( props );
        this.state = {
            contador : 0 ,
        }

        this.sumar = this.sumar.bind(this)
    }

    sumar(e){
        console.log("Sumando")
        this.state.contador =  this.state.contador + 1
    }

    render() {
        return(
            <div>
                <h2> Eventos en componentes de Clase </h2>

                <div>
                    <button> Restar </button>
                    <button onClick={ this.sumar }> Sumar </button>
               </div>

               <h3> {this.state.contador} </h3>
               
            </div>
        )
    }
}