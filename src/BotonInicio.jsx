function BotonInicio() {
    return(
        <div>
        <p className="pregunta">¿Ya tienes una cuenta?</p>
        <button className="buttonI" onClick={() => console.log('Button clicked!')}>
            Iniciar Sesión
        </button>
        </div>
    )
  }
export {BotonInicio}