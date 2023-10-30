import './App.css'
import ComponentClass from './components/ComponenteClass'
import ComponenteFuncional from './components/ComponenteFuncional'
import Estado from './components/Estado'
import Propiedades from './components/Propiedades'
import RederizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElemento from './components/RenderizadoElement'
import {MasSobreEventos} from './components/Eventos'

function App() {
  let logueado = false
  let estacionesDelAnio = ["Verano" , "Otoño" , "Invierno" , "Primavera"]

  return (
   
      <div>
        Hola
        <label htmlFor="nombre">Ingresar Nombre</label>
        <input id="nombre"/>
        { logueado ? <p>Estas Logueado</p> : <p>No se encuentra usuario logueado</p> }
        <ul>
          { estacionesDelAnio.map( (estacion , index ) =>  (
            
              <li key={index}> 
              {estacion} 
              <p key={( index + 1)}> {index}</p> 
              </li> 
         ))}
        </ul>

        <section>
          <ComponentClass msg="Hola Soy un componente desde propiedad"/>
          <br /><br /><br /><br />
          <ComponenteFuncional msg="Componente Funcional desde prop" />
          <br /><br /><br /><br />
          <Propiedades 
              cadena={ 5 }
              numero={ 91 } 
              booleano={ true } 
              arreglo={[1,2,3]}
              objeto={ {nombre: "Carlos" , apellido:"Gonzales" , email :"carlos@carlos.carlos"} } 
              funcion={ (num => num * num) }
              elemento= { <i> Esto es un elemento React </i>}
              componenteReact =  {<ComponenteFuncional msg="Componente por Prop"/>}
              />
          <br /><br /><br /><br />
          <Estado />
          <br /><br /><br /><br />

          <RederizadoCondicional />

          <br /><br /><br /><br />

          <RenderizadoElemento />

          <br /><br /><br /><br />

          <MasSobreEventos />

        </section>
 
      </div>
      
  )
}

export default App
