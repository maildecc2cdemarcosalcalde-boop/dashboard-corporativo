import { useState } from 'react'
import EmployeeCard from '../components/EmployeeCard'
import type { Empleado } from '../lib/interfaces'
import '../styles/Views.css'

const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users'

function Personal(): React.JSX.Element {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [busqueda, setBusqueda] = useState<string>('')

  const cargarDatos = async (): Promise<void> => {
    setCargando(true)
    setError('')
    try {
      const respuesta = await fetch(URL_USUARIOS)
      // fetch solo falla con errores de red: validamos el estado manualmente
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }
      const datos: Empleado[] = await respuesta.json()
      setEmpleados(datos)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
    setCargando(false)
  }

  // Filtro en tiempo real por nombre
  const filtrados = empleados.filter((emp) =>
    emp.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section>
      <h2 className="vista-titulo">Directorio de personal</h2>

      <div className="vista-barra">
        <input
          className="vista-buscador"
          type="text"
          placeholder="🔍 Buscar empleado por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="vista-boton" onClick={cargarDatos} disabled={cargando}>
          Cargar datos
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje mensaje-error">{error}</p>}
      {!cargando && !error && empleados.length === 0 && (
        <p className="mensaje">Pulsa «Cargar datos» para ver el personal.</p>
      )}

      <div className="grid">
        {filtrados.map((emp) => (
          <EmployeeCard
            key={emp.id}
            nombre={emp.name}
            correo={emp.email}
            ciudad={emp.address.city}
          />
        ))}
      </div>
    </section>
  )
}

export default Personal
