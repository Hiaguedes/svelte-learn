import type IRepo from "./IRepos";

export default interface IUsuario {
    login: string;
    avatar_url: string;
    perfil_url: string;
    nome: string | null;
    repositorios_publicos: number;
    seguidores: number;
    repos_recentes?: IRepo[]
}