import { Link } from "react-router-dom";

function Sobre() {
  return (
    <>
      <h1>pagina sobre a empresa</h1>
      <Link to="/">Pagina Home</Link><br/>
      <Link to="/contato">Pagina Contato</Link>
    </>
    );
}

export default Sobre;
