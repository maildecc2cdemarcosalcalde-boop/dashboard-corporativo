import '../styles/Cards.css'

interface AssetCardProps {
  titulo: string
  precio: number
  categoria: string
  imagen: string
}

function AssetCard({ titulo, precio, categoria, imagen }: AssetCardProps): React.JSX.Element {
  return (
    <article className="tarjeta tarjeta-activo">
      <img className="activo-imagen" src={imagen} alt={titulo} />
      <div className="tarjeta-info">
        <h3>{titulo}</h3>
        <p>{categoria}</p>
        <span className="activo-precio">{precio} $</span>
        {/* Renderizado condicional: etiqueta solo si el precio supera los 50$ */}
        {precio > 50 && <span className="etiqueta-alto-valor">Activo de Alto Valor</span>}
      </div>
    </article>
  )
}

export default AssetCard
