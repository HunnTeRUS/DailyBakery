export default interface BakeryInterface {
    _id?: any;
    nome?: String,
    email?: String,
    numero_celular?: String,
    numero_telefone?: String,
    cnpj?: String,
    aberto_fechado?: Boolean,
    ultima_fornada?: Date,
    cep?: String,
    rua?: String,
    numero?: String,
    bairro?: String,
    cidade?: String,
    estado?: String,
    tempo_espera?: Date,
    error?: String,
    location?: {
      _id: String,
      coordinates : [
        latitude: Number,
        longitude: Number,
      ],
    }
}