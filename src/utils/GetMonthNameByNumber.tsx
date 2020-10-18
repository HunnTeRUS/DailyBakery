export default function numberToName(monthNumber: Number): String {
    var data: String = "";

    console.log(monthNumber)

    if (monthNumber <= 12 && monthNumber >= 1) {

        switch (monthNumber) {
            case 1: data = "Janeiro"; break;
            case 2: data = "Fevereiro"; break;
            case 3: data = "Março"; break;
            case 4: data = "Abriu"; break;
            case 5: data = "Maio"; break;
            case 6: data = "Junho"; break;
            case 7: data = "Julho"; break;
            case 8: data = "Agosto"; break;
            case 9: data = "Setembro"; break;
            case 10: data = "Outubro"; break;
            case 11: data = "Novembro"; break;
            case 12: data = "Dezembro"; break;
        }
    }

    return data;
};