import { useState } from "react"


function Contador() {

    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h2>Componente Contador</h2>
            <p>O valor atual é: {valor}</p>
            <button onClick={handleClick}>Adicionar mais um</button>
        </div>
    )
}

export default Contador
