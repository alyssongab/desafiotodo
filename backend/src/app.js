import express from 'express';
import TarefaRouter from './routes/TarefaRoutes.js';
import sequelize from './config/database.js';
import cors from 'cors';

const app = express();

// habilitar o cors para o frontend

app.use(cors({
    origin: 'http://localhost:5176'
}));

app.use(express.json());

// define a url de rotas
app.use('/tarefas', TarefaRouter);

sequelize
    .sync()
    .then(() => console.log("Banco de dados sincronizado!"))
    .catch((error) => console.error("Erro ao sincronizar banco de dados: ", error));

export default app;