import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrarse</h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="text-gray-700">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label htmlFor="apellido" className="text-gray-700">Apellido</label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Apellido"
              />
            </div>
            <div>
              <label htmlFor="correo" className="text-gray-700">Correo</label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Correo"
              />
            </div>
            <div>
              <label htmlFor="fechaNacimiento" className="text-gray-700">Fecha de Nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="username" className="text-gray-700">Nombre de Usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombre de Usuario"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-700">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-gray-700">Confirmar Contraseña</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                placeholder="Confirmar Contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Ya tienes cuenta? ¡Ingresa!
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
