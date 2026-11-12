import '../styles/Cards.css'

interface EmployeeCardProps {
  nombre: string
  correo: string
  ciudad: string
}

function EmployeeCard({ nombre, correo, ciudad }: EmployeeCardProps): React.JSX.Element {
  return (
    <article className="tarjeta tarjeta-empleado">
      <div className="empleado-avatar">{nombre.charAt(0)}</div>
      <div className="tarjeta-info">
        <h3>{nombre}</h3>
        <p>✉️ {correo}</p>
        <p>📍 {ciudad}</p>
      </div>
    </article>
  )
}

export default EmployeeCard
