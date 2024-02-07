import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem"

interface CardPostagemProps {
    postagens: Postagem
  }
  
  function CardPostagem({postagens}: CardPostagemProps) {
    return (
      <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
          <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
            <img src={postagens.usuario?.foto} className='h-12 rounded-full' alt="" />
            <h3 className='text-lg font-bold text-center uppercase '>{postagens.usuario?.nome}</h3>
          </div>
          <div className='p-4 '>
            <h4 className='text-lg font-semibold uppercase'>{postagens.titulo}</h4>
            <p>{postagens.texto}</p>
            <p>Tema: {postagens.tema?.tema}</p>
            <p>Data: {new Intl.DateTimeFormat(undefined, {
                      dateStyle: 'full',
                      timeStyle: 'medium',
                    }).format(new Date(postagens.data))}</p>
          </div>
        </div>
        <div className="flex">
        <Link to={`/editarPostagem/${postagens.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarPostagem/${postagens.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default CardPostagem