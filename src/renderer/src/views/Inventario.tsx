import { useState } from 'react'
import AssetCard from '../components/AssetCard'
import type { Activo } from '../lib/interfaces'
import '../styles/Views.css'

const URL_PRODUCTOS = 'https://fakestoreapi.com/products?limit=6'

function Inventario(): React.JSX.Element {
  const [activos, setActivos] = useState<Activo[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cargarDatos = async (): Promise<void> => {
    setCargando(true)
    setError('')
    try {
      const respuesta = await fetch(URL_PRODUCTOS)
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }
      const datos: Activo[] = await respuesta.json()
      setActivos(datos)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
    setCargando(false)
  }

  return (
    <section>
      <h2 className="vista-titulo">Inventario de activos</h2>

      <div className="vista-barra">
        <button className="vista-boton" onClick={cargarDatos} disabled={cargando}>
          Cargar datos
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje mensaje-error">{error}</p>}
      {!cargando && !error && activos.length === 0 && (
        <p className="mensaje">Pulsa «Cargar datos» para ver el inventario.</p>
      )}

      <div className="grid">
        {activos.map((activo) => (
          <AssetCard
            key={activo.id}
            titulo={activo.title}
            precio={activo.price}
            categoria={activo.category}
            imagen={activo.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Inventario
