interface homeProps {
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {

    return (
        <>
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
                            alt="Imagem da Página Home"
                            className="w-2/3"></img>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home