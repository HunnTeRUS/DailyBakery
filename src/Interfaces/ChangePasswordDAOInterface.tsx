export default interface ChangePasswordDAOInterface{
    email?: string,
    senhaAntiga?: string,
    novaSenha?: string,
    error?:string,
    _id?:string
}