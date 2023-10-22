
export default function Login() {
    return (
      <div>
        <div className="h-20 bg-sky-700 grid grid-cols-3 gap-4 content-center">
          <div className="flex pl-4">
            <img src="../img/logo.png" className="max-h-14"></img>
            <h1 className="text-3xl font-bold self-center">Social Dev</h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-52">
          <div className="flex flex-col">
            <form className="grid grid-cols-1 text-center">
              <label className="text-xl text-black font-bold m-1">Correo Electrónico</label>
              <input type="email" className="border-2 rounded-xl border-gray-300 m-1 w-80 text-black justify-self-center pl-3 py-1"/>
              <label className="text-xl text-black font-bold m-1">Contraseña</label>
              <input type="password" className="border-2 rounded-xl border-gray-300 m-1 w-80 text-black justify-self-center pl-3 py-1"/>
              <a href="#" className="text-gray-500 text-sm">¿Olvidaste tu contraseña?</a>
            </form>
            <button className="bg-slate-400 rounded-2xl w-44 mt-5 self-center">
                <div className="flex p-1 px-4">
                  <img src="../img/login.png" className="max-h-6 self-center m-1"></img>
                  <h1 className="text-xl self-center m-1">INGRESAR</h1>
                </div>
            </button>
            <a href="#" className="text-gray-500 text-sm text-center mt-1">¿No tienes cuenta? ¡Registrate aquí!</a>
          </div>
        </div> 
      </div>

    )
  }