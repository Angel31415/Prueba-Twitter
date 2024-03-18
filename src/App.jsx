import { Fotox } from "./FotoX"
import { BotonGoogle } from "./BotonGoogle"
import { Titulo } from "./Titulo"
import { BotonApple } from "./BotonApple"
import { BotonCrear } from "./BotonCrear"
import {BotonInicio}  from "./BotonInicio"
function App() {
  return (
    <>
    <div className="container">

    <Fotox/>

      <div className="contenido-derecha">
        
        <div >
          <Titulo/>
        </div>
       
        <div className="botonG">
          {<BotonGoogle/>}  
        </div>
         
        <div className="botonA">
          {<BotonApple/>}
        </div>

        <div className="botonC">
          {<BotonCrear/>}
        </div>

        <div className="botonI">
          {<BotonInicio />}
        </div>

      </div>

    </div> 
    </>
  )
}

export default App
