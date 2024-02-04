import './App.css'
import Contador from './pages/contator/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {
  return (
    <>
      <Home
        titulo="Passeios gratuitos em Essepê"
        texto="Turiste a selva de pedra, mesmo se estiver sem grana ☺ Se liga nas dicas - e compartilha as suas com a gente"
      />
      <Contador />
      <Tarefa />
    </>
  )
}

export default App
