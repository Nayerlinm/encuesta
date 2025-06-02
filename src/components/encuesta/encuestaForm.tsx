import type { TEncuesta } from "../../models";

function EncuestaForm(item: Partial<TEncuesta>) {
  return <div>{JSON.stringify(item, null, 2)}</div>;
}

export default EncuestaForm;
