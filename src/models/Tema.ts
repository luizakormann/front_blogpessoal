import Postagem from "./Postagem";

export default interface Tema {
    id: number;
    tema: string;
    postagem?: Postagem | null;
  }
  