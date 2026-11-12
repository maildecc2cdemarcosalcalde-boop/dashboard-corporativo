import type { Seccion } from '../lib/interfaces'
import '../styles/Sidebar.css'

interface SidebarProps {
  seccion: Seccion
  onCambiar: (seccion: Seccion) => void
}

const opciones: { nombre: Seccion; icono: string }[] = [
  { nombre: 'Personal', icono: '👥' },
  { nombre: 'Inventario', icono: '📦' },
  { nombre: 'Incidencias', icono: '⚠️' }
]

function Sidebar({ seccion, onCambiar }: SidebarProps): React.JSX.Element {
  return (
    <nav className="sidebar">
      {opciones.map((op) => (
        <button
          key={op.nombre}
          className={seccion === op.nombre ? 'sidebar-btn activo' : 'sidebar-btn'}
          onClick={() => onCambiar(op.nombre)}
        >
          <span>{op.icono}</span>
          <span>{op.nombre}</span>
        </button>
      ))}
    </nav>
  )
}

export default Sidebar
