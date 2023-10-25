import './App.css'
import ComponentClass from './components/ComponenteClass'
import ComponenteFuncional from './components/ComponenteFuncional'

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
          
        </section>
 
      </div>
      
  )
}

export default App
