import express from 'express';
import {
    listarTarefas,
    criaTarefa
} from '../controllers/TarefaController.js';

const router = express.Router();

// rotas para tarefas - localhost:3000/tarefas

router.get('/', listarTarefas);
router.post('/', criaTarefa);

export default router;