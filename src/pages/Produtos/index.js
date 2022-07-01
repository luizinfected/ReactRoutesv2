import { useParams } from "react-router-dom"

function Produto() {
    const {id} = useParams()
    return (
        <>
            
            <span>O ID do meu produto é: {id}</span>
        </>
        
    )
}

export default Produto