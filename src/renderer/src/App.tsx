import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Personal from './views/Personal'
import Inventario from './views/Inventario'
import Incidencias from './views/Incidencias'
import type { Seccion } from './lib/interfaces'
import './styles/App.css'

function App(): React.JSX.Element {
  const [seccion, setSeccion] = useState<Seccion>('Personal')

  return (
    <div className="app">
      <Header />
      <div className="cuerpo">
        <Sidebar seccion={seccion} onCambiar={setSeccion} />
        <main id="panel_central">
          {/* Renderizado condicional según la pestaña seleccionada */}
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  )
}

export default App
