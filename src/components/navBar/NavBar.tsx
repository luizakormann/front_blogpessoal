import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastAlert } from "../../util/toastAlert";

function Navbar() {

    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlert("Bom rolê e até a próxima!", 'sucesso');
        navigate("/login");
    }

    return (
        <>
            <div className="w-full bg-sky-950 text-red-50 flex justify-center py-4 border-b border-red-50">
                <div className="container flex justify-between text-lg ">
                    <Link to="/home" className="text-3xl font-bold hover:underline hover:text-red-300">
                        Essepê 0800
                    </Link>

                    <div className="flex gap-4 font-semibold">
                        <Link to="/postagens" className="hover:text-yellow-300 hover:underline">
                            Ver Postagens
                        </Link>
                        <Link to="/tema" className="hover:text-cyan-400 hover:underline">
                            Categorias de passeios
                        </Link>
                        <Link to="/cadastro" className="hover:text-yellow-300 hover:underline">
                            Cadastre-se aqui
                        </Link>
                        <Link to='/perfil' className='hover:text-cyan-400 hover:underline'>
                            Meu Perfil
                        </Link>
                        <Link to='' onClick={logout} className="hover:text-red-300 hover:underline">
                            Sair
                        </Link>
                    </div>


                    {/* <div className="flex gap-4 font-semibold">
                        <div className="hover:underline">Postagens</div>
                        <div className="hover:underline">Temas</div>
                        <div className="hover:underline">Cadastrar tema</div>
                        <div className="hover:underline">Perfil</div>
                        <div className="hover:underline">Sair</div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Navbar;