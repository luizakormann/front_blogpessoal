import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import './Cadastro.css'

function Cadastro() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        navigate("/login");
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
        console.log(usuario);
    }

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
        console.log(confirmaSenha);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);
            try {
                alert("Salve, salve! Essa é a selva de pedra, boas vindas");
            } catch (error) {
                alert("Mano do céu! Deu ruim... Confirme as informações fornecidas e tente novamente.");
            }
        } else {
            alert("A babilônia é louca mas aqui não é bagunça! Confirme as informações fornecidas e tente novamente.");
            setUsuario({ ...usuario, senha: "" });
            setConfirmaSenha("");
        }

        setIsLoading(false);
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold  bg-yellow-300">
                <div className="fundoCadastro hidden lg:block"></div>
                <form
                    className="flex justify-center items-center flex-col w-2/3 gap-3"
                    onSubmit={cadastrarNovoUsuario}
                >
                    <h2 className="text-sky-800 text-5xl">Chega Junto</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className="text-sky-950">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Informe seu nome"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-sky-950">E-mail</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Seu melhor e-mail"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className="text-sky-950">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-sky-950">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha" className="text-sky-950">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleConfirmaSenha(e)
                            }
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button
                            className="rounded border-solid border-2 border-slate-700 text-sky-950 bg-yellow-300 hover:bg-red-400 w-1/2 py-2"
                            onClick={retornar}
                        >
                            Deixa quieto...
                        </button>
                        <button
                            className="rounded border-solid border-2 border-slate-700 text-sky-950 bg-yellow-300 hover:bg-sky-800 hover:text-red-50 w-1/2 py-2 flex justify-center"
                            type="submit"
                        >
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <span>Bora!</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;