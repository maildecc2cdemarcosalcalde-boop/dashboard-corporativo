import { useState } from 'react'
 import logo from '../assets/mi-logo.png'
import '../styles/Header.css'

function Header(): React.JSX.Element {
  const [hora, setHora] = useState<string>(() => new Date().toLocaleTimeString())

  // Actualiza la hora cada segundo.
  // Nota: esto se optimizará más adelante con el hook useEffect.
  setInterval(() => {
    setHora(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <header className="header">
      <div className="header-marca">
        <img className="header-logo" src={logo} alt="Logo NovaCore" />
        <span className="header-nombre">NovaCore Solutions</span>
      </div>
      <span className="header-hora">{hora}</span>
    </header>
  )
}

export default Header
