import express from 'express';
import router from './routes.js';
import { createTable } from './Controller/pessoa.js';

const app = express();
app.use(express.json());

// Inicia a tabela ao rodar o servidor
createTable();

app.use(router);

app.listen(3000, () => console.log("API rodando na porta 3000"));