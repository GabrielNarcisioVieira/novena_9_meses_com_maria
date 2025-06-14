import { fileURLToPath } from 'url';
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// Express
const app = express();

// Static path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, './public')));

// Handlebars
const handlebars = exphbs.create({
    helpers: {
        json: function (value) {
            return JSON.stringify(value);
        },
    }
});

// Template Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Index
app.get('/', (req, res) => {
    res.redirect('/novena/hoje');
});

// Novena
import { router as novena } from './routes/novena_route.js';
app.use('/novena', novena);

// Middleware para página não encontrada
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Página não encontrada' });
});

// Server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log('Servidor iniciado em: localhost:' + PORT);
});