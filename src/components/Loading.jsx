// Crea un componente Loading. Questo apparirà nella pagina quando la richiesta è in fase di risoluzione, ma non ancora risolta.

import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center my-3">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
