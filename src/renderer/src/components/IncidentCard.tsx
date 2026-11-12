import '../styles/Cards.css'

interface IncidentCardProps {
  titulo: string
  completada: boolean
}

function IncidentCard({ titulo, completada }: IncidentCardProps): React.JSX.Element {
  return (
    // Renderizado condicional: cambia la clase (color de fondo) y el icono según completed
    <article
      className={
        completada
          ? 'tarjeta tarjeta-incidencia incidencia-resuelta'
          : 'tarjeta tarjeta-incidencia incidencia-pendiente'
      }
    >
      <div className="incidencia-icono">{completada ? '✅' : '⏳'}</div>
      <div className="tarjeta-info">
        <span className="incidencia-estado">{completada ? 'Resuelta' : 'Pendiente'}</span>
        <h3>{titulo}</h3>
      </div>
    </article>
  )
}

export default IncidentCard
