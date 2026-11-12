import { useState } from 'react'
import IncidentCard from '../components/IncidentCard'
import type { Incidencia } from '../lib/interfaces'
import '../styles/Views.css'

const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos?_limit=8'

function Incidencias(): React.JSX.Element {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cargarDatos = async (): Promise<void> => {
    setCargando(true)
    setError('')
    try {
      const respuesta = await fetch(URL_TODOS)
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }
      const datos: Incidencia[] = await respuesta.json()
      setIncidencias(datos)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
    setCargando(false)
  }

  return (
    <section>
      <h2 className="vista-titulo">Registro de incidencias</h2>

      <div className="vista-barra">
        <button className="vista-boton" onClick={cargarDatos} disabled={cargando}>
          Cargar datos
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje mensaje-error">{error}</p>}
      {!cargando && !error && incidencias.length === 0 && (
        <p className="mensaje">Pulsa «Cargar datos» para ver las incidencias.</p>
      )}

      <div className="grid">
        {incidencias.map((inc) => (
          <IncidentCard key={inc.id} titulo={inc.title} completada={inc.completed} />
        ))}
      </div>
    </section>
  )
}

export default Incidencias
