function BotonApple() {
    return(
        <div>
        <button className="buttonA" onClick={() => console.log('Button clicked!')}>
            <img className="FotoA" src="./public/Apple logo.png" alt="Registrate con Apple" /> 
               Registrate con Apple
        </button>
        </div>
    )
  }
export {BotonApple}