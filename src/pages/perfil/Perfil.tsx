import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

function Perfil() {
    let navigate = useNavigate()
  
      const { usuario } = useContext(AuthContext)
  
      useEffect(() => {
          if (usuario.token === "") {
              alert('Você precisa estar logado')
              navigate("/login")
          }
      }, [usuario.token])
      
    return (
      <div className='container mx-auto mt-4 rounded-2xl overflow-hidden bg-red-400'>
        <img className='w-full object-cover border-b-8 border-sky-800' src="src\assets\capa_perfil.jpg" alt="Imagem mostra os jardins do Museu do Ipiranga vista do alto em um dia de sol" />
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto border-8 border-red-400 relative z-10' />
        <div className=" h-72 flex flex-col bg-sky-800 text-white text-2xl items-center font-semibold justify-center">
          <p>Nome: {usuario.nome} </p>
          <p>E-mail: {usuario.usuario}</p>
        </div>
      </div>
    )
  }
  
  export default Perfil