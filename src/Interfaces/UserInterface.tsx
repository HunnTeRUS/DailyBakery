export default interface UserInterface{
    _id?: string,
    nome?: string,
    email?: string,
    senha?: string,
    numero_celular?: string,
    token?: string,
    error?: string,
    favoritos?: Array<favorites>;
    recentes?: Array<recents>;
}

interface favorites{
    _id: String
}

interface recents{
    _id: String
}