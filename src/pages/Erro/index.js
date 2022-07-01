import { Link } from "react-router-dom"
const links = ['Sobre', 'Home', 'Contato']

function Erro() {
    return (
        <div>
            <h2>Ops parece que essa página nao existe!</h2>
            {links.map((link) => {
                return (
                    <div className="menu">
                        <Link key={link} to={link}>{link}</Link> 
                    </div>
                    )
            })}
         </div>
    )
}

export default Erro