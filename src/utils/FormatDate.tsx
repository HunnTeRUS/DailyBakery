import numberToName from '../utils/GetMonthNameByNumber'

export default function formatDateFromStringDate(date: string) {
    const data = new Date(date)
    if (data.toString() !== "Invalid Date") {
      const day = formatDate(data.getDate());
      const month = formatDate(data.getMonth());
      const year = formatDate(data.getFullYear());

      const dataAtual = new Date();

      if (dataAtual.getDate() === data.getDate()
        && dataAtual.getFullYear() === data.getFullYear()
        && dataAtual.getMonth() === data.getMonth()) {
        return "HOJE"
      }

      else if (dataAtual.getDate() - 1 === data.getDate()
        && dataAtual.getFullYear() === data.getFullYear()
        && dataAtual.getMonth() === data.getMonth()) {
        return "ONTEM"
      }

      else {
         return `${day} de ${numberToName(Number(month))} de ${year}`
      }
    }
    else {
      return `Não há fornadas\n até o momento`
    }
}

export function formatHourFromStringDate(date: string) {
    const data = new Date(date)
    
    if (data.toString() !== "Invalid Date") {
        const hora = formatDate(data.getUTCHours());
        const minutos = formatDate(data.getUTCMinutes());
        const segundos = formatDate(data.getUTCSeconds());
  
        const dataFinal = `Horario: ${hora}:${minutos}:${segundos}`
  
        return dataFinal;
    }
}

function formatDate(data: any) {
    if (data < 10) {
      return `0${data}`;
    }
    return data;
}