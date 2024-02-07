import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert("Bom rolê e até a próxima!");
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
                    <Link to="/tema" className="hover:text-yellow-300 hover:underline">
                            Categorias de passeios
                    </Link>
                        <Link to="/cadastro" className="hover:text-yellow-300 hover:underline">
                            Cadastre-se aqui
                        </Link>
                        <Link to='' onClick={logout} className="hover:text-cyan-400 hover:underline">
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