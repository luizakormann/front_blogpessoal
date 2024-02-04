
function Home() {

    return (
        <>
            <div id='container' className="flex justify-center bg-sky-800 ">
                <div id='subcontainer' className="container grid grid-cols-2 text-white ">
                    <div id='textos' className="flex flex-col gap-4 items-center justify-center px-4 py-4">
                        <h2 className="text-4xl font-semibold">Passeios gratuitos em Essepê</h2>
                        <p className="text-xl">Turiste a selva de pedra, mesmo se estiver sem grana ☺</p>
                        <p className="text-xl">Se liga nas dicas - e compartilhe suas experiências com a gente!</p>
                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border solid-2 px-4 py-2">
                                Nova Postagem
                            </div>
                        </div>
                    </div>
                    <div id='img' className="flex justify-center">
                        <img
                            src="https://imgur.com/k1jbDV0.png"
                            alt="Foto mostra o final da Avenida Paulista, com o túnel para Dr. Arnaldo com os clássicos grafites da cidade abaixo e a Consolação ao fundo, com a árvore da Praça do Ciclista ao centro"
                            className="w-2/3"></img>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home