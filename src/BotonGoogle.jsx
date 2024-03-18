function BotonGoogle() {
    return(
        <div>
            <button className="buttonG" onClick={() => console.log('Button clicked!')}>
            <img className="FotoG"src="./public/Google logo.png" alt="google" />
                Registrate con Google
            </button>
        </div>
       
    )
  }
export {BotonGoogle}