import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <h1>Bem-vindo a pagina home</h1>
    <Link to="/sobre">Sobre</Link><br/>
    <Link to="/contato">Contato</Link>
    <hr />
    <Link to="/produto/35">Acessar produto 35</Link>
    </>
  );
}

export default Home;
