import { NavLink } from "react-router-dom";
import type { TEncuesta } from "../../models";

function EncuestaCard(item: TEncuesta) {
  const { titulo, descripcion, puntaje_maximo } = item;
  return (
    <div className="col-4">
      <NavLink
        key={item.id}
        to={`/${item.id}`}
        className="card  p-0 text-decoration-none cursor-pointer"
      >
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Puntaje: {puntaje_maximo}</small>
        </div>
      </NavLink>
    </div>
  );
}

export default EncuestaCard;
