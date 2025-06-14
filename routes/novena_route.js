import express from 'express';
import { Novena9MesesController } from '../controllers/novena_controller.js';
const router = express.Router();

router.get('/', async (req, res) => {
    var data = new Date();
    var dataAtual = data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
    });

    var titulo = `${dataAtual} - Nove meses com Maria`

    var novenaHoje = Novena9MesesController.getNovenaAtual(dataAtual);
    var oracao_gravidez_maria = Novena9MesesController.getOracao();
    var datas = Novena9MesesController.getListaDatas();

    res.render('novena_hoje_view', { titulo, novenaHoje, dataAtual, oracao_gravidez_maria, datas });
});

router.get('/:data', async (req, res) => {
    const dataParam = req.params.data;

    // Expressão regular para validar formato DD-MM
    const regexData = /^\d{2}-\d{2}$/;

    let usarHoje = false;

    if (!regexData.test(dataParam)) {
        usarHoje = true;
    } else {
        const [diaStr, mesStr] = dataParam.split('-');
        const dia = parseInt(diaStr, 10);
        const mes = parseInt(mesStr, 10);

        const diasPorMes = {
            1: 31, 2: 28, 3: 31, 4: 30,
            5: 31, 6: 30, 7: 31, 8: 31,
            9: 30, 10: 31, 11: 30, 12: 31
        };

        // Verifica se mês é válido e se o dia existe no mês
        const diaValido = diasPorMes[mes] && dia >= 1 && dia <= diasPorMes[mes];

        // Transforma em formato MMDD para facilitar comparação
        const valorData = mes * 100 + dia;

        if (!diaValido || valorData < 325 || valorData > 1225) {
            usarHoje = true;
        }
    }

    if (usarHoje) {
        return res.redirect(`/novena`);
    }

    const dataAtualFormatada = dataParam.replace('-', '/'); 

    const titulo = `${dataAtualFormatada} - Nove meses com Maria`;

    const novenaHoje = Novena9MesesController.getNovenaAtual(dataAtualFormatada);
    const oracao_gravidez_maria = Novena9MesesController.getOracao();
    var datas = Novena9MesesController.getListaDatas();

    res.render('novena_hoje_view', {
        titulo,
        novenaHoje,
        dataAtual: dataAtualFormatada,
        oracao_gravidez_maria,
        datas
    });
});


export { router };