import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="bg-indigo-600 p-8 text-white">
            <div className="container mx-auto flex items-center">
                {/* Logo de la página */}
                <img src="/images/logo.PNG" alt="Logo" className="w-10 h-13 mr-2" />

                {/* Nombre de la página */}
                <h1 className="text-3xl font-bold">Social Dev</h1>
            </div>
        </div>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrarse</h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <div>
              <div className="text-center mb-2 text-gray-700">Nombres</div>
              <input
                id="nombres"
                name="nombres"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombres"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Apellidos</div>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Apellidos"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Correo Electrónico</div>
              <input
                id="correo electrónico"
                name="correo electrónico"
                type="email"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Fecha de Nacimiento</div>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Nombre de Usuario</div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombre de Usuario"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Contraseña</div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <div className="text-center mb-2 text-gray-700">Repetir Contraseña</div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full border border-gray-300 rounded-full py-2 px-3 text-gray-900 placeholder-gray-500"
                placeholder="Confirmar Contraseña"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-indigo-500">
                ¿Ya tienes cuenta? ¡Ingresa!
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-lg font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-12 py-1"
            >
              REGISTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
