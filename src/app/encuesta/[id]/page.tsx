import { useParams } from "react-router-dom";
import { mockEncuentas } from "../../../mocks/encuestas";
import EncuestaForm from "../../../components/encuesta/encuestaForm";

function EncuestaFormPage() {
  const { id } = useParams();

  const encuesta = mockEncuentas.find((encuesta) => encuesta.id === Number(id));

  return <EncuestaForm {...encuesta} />;
}

export default EncuestaFormPage;
