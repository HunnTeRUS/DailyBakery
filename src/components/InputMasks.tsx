export default function cnpjMask(value : any) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{3})/, '$1/$2')
    .replace(/(\d{4})(\d{2})/, '$1-$2')
}

export function removeMask(value : any) : string {
return value
  .replace(/\D/g, '')
}

export function celPhoneMask(value : any) {
return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d{1})/, '($1) $2')
  .replace(/(\d{5})(\d{1})/, '$1-$2')
}

export function telphoneMask(value : any) {
return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d{1})/, '($1) $2')
  .replace(/(\d{4})(\d{1})/, '$1-$2')
  .replace(/(\d{4})(\d{1})/, '$1-$2')
}

export function cepMask(value : any) {
return value
  .replace(/\D/g, '')
  .replace(/(\d{5})(\d{2})/, '$1-$2')
}

export function numberMask(value : any) {
return value
  .replace(/\D/g, '')
}

export function textMask(value : any) {
return value
  .replace(/[^a-zA-Z]+/g, '')
}