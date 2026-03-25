import { novena, oracao_gravidez_maria } from "../data/novena.js"

class Novena9MesesController {
    static getNovenaAtual(dataAtual) {
        return novena.find((e) => e.data === dataAtual);
    }

    static getListaDatas() {
        var datas = [];
        novena.forEach((e) => datas.push(e.data));

        const meses = [
            '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        return datas.map(dataStr => {
            const [diaStr, mesStr] = dataStr.split('/');
            const dia = parseInt(diaStr, 10);
            const mes = parseInt(mesStr, 10);

            return {
                dia: dia.toString().padStart(2, '0'),
                mes: mes.toString().padStart(2, '0'),
                mesLiteral: meses[mes]
            };
        });
    }

    static getPrevData(dataAtual) {
        const idx = novena.findIndex((e) => e.data === dataAtual);
        if (idx <= 0) return null;
        return novena[idx - 1].data.replace('/', '-');
    }

    static getNextData(dataAtual) {
        const idx = novena.findIndex((e) => e.data === dataAtual);
        if (idx === -1 || idx >= novena.length - 1) return null;
        return novena[idx + 1].data.replace('/', '-');
    }

    static getOracao() {
        return oracao_gravidez_maria;
    }
}

export { Novena9MesesController }