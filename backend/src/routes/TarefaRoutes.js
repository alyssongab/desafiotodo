import express from 'express';
import {
    listarTarefas,
    criaTarefa,
    listarTarefaId
} from '../controllers/TarefaController.js';

const router = express.Router();

// rotas para tarefas - localhost:3000/tarefas

// lista todas as tarefas
router.get('/', listarTarefas);

// cria uma nova tarefa
router.post('/', criaTarefa);

// lista uma tarefa (pelo id)
router.get('/:id', listarTarefaId);

export default router;