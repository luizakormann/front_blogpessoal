import { ReactNode, createContext } from "react";
import { useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import Login from "../pages/login/Login";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
  }
  
  interface AuthProvidersProps {
    children: ReactNode;
  }
  
  export const AuthContext = createContext({} as AuthContextProps);
  
  export function AuthProvider({ children }: AuthProvidersProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    async function handleLogin(userLogin: UsuarioLogin) {
      setIsLoading(true);
  
      try {
        await Login();
        alert("Usuário autenticado com sucesso!");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("Os dados do usuário estão inconsistentes!");
      }
    }
    function handleLogout() {
      setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
      });
    }
    return(
      <AuthContext.Provider value= {{usuario, handleLogin, handleLogout, isLoading}}>
          {children}
      </AuthContext.Provider>
    )
  }