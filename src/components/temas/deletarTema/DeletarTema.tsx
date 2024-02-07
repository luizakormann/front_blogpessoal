import { useContext, useEffect, useState } from "react"
import { buscar, deletar } from "../../../service/Service"
import { AuthContext } from "../../../context/AuthContext"
import { useNavigate, useParams } from "react-router-dom"
import Tema from "../../../models/Tema"
import { ToastAlert } from "../../../util/toastAlert"

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tema/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlert('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/tema")
    }

    async function deletarTema() {
        try {
            await deletar(`/tema/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlert('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            ToastAlert('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.tema}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema