import './App.css'

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
             
          
             )) }
        </ul>
      </div>
      
  )
}

export default App
