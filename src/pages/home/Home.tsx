import { useState } from "react";

interface homeProps {
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {

    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            {
                isLogged ? (
                    <div style={{ /* primeira div ocupa a tela toda, a próxima é o subcontainer */
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <h2>{props.titulo}</h2>
                                <p>{props.texto}</p>
                            </div>
                            <div style={{
                                width: "80vw",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <img
                                    src="https://imgur.com/k1jbDV0.png"
                                    alt="Foto mostra o final da Avenida Paulista, com o túnel para Dr. Arnaldo com os clássicos grafites da cidade abaixo e a Consolação ao fundo, com a árvore da Praça do Ciclista ao centro"
                                    className="w-2/3"></img>

                            </div>
                        </div>
                    </div>
                ) : ( /** renderização condicional: condição ? ação verdadeira : ação falsa */
                    <div style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center"
                    }}
                    >
                        <button onClick={() => setIsLogged(true)}>Chega junto!</button>
                    </div>
                )
            }
        </>
    )
}

export default Home