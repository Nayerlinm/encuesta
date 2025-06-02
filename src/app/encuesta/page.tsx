import EncuestaCard from "../../components/encuesta/encuestaCard";
import { mockEncuentas } from "../../mocks/encuestas";

function EncuestaPage() {
  const encuestas = mockEncuentas;

  return (
    <div className="container my-3">
      <h1 className="mb-3">Encuestas</h1>
      <div className="row g-3">
        {encuestas.map((encuesta) => (
          <EncuestaCard key={encuesta.id} {...encuesta} />
        ))}
      </div>
    </div>
  );
}

export default EncuestaPage;
