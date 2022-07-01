import { Link } from "react-router-dom"

function Contato(){
    return (
        <div>
            <h1>Pagina contato</h1>
            <span>blablablabalalblablal (xxx)aaaaa</span>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Contato