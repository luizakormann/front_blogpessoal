import Popup from "reactjs-popup";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

function ModalPostagem() {
    return (
      <>
        <Popup 
        trigger={<button 
        className='rounded border-solid border-2 border-red-50 p-6
        bg-sky-800 hover:bg-red-400 hover:text-sky-950
        text-red-50 font-semibold text-xl'>
            Ver Postagens</button>} modal>
          <div>
            <FormularioPostagem />
          </div>
        </Popup>
      </>
    );
  }
  
  export default ModalPostagem;