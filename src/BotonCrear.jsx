function BotonCrear() {
    return(
        <div>
            <p className="separador"> O </p>
            <button className="buttonC" onClick={() => console.log('Button clicked!')}>
                Crear cuenta
            </button>
            <p class="texto">Al registrarte, aceptas los <span class="azul">Términos de servicio</span> 
            y <span class="azul">la Política <br/> de Privacidad</span>, incluida 
            la política de <span class="azul">Uso de cookies</span>.</p>
        </div>
    )
  }
export {BotonCrear}