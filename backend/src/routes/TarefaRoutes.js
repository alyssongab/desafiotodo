import express from 'express';
import {
    listarTarefas,
    criaTarefa,
    listarTarefaId,
    atualizarTarefa
} from '../controllers/TarefaController.js';

const router = express.Router();

// rotas para tarefas - localhost:3000/tarefas

// lista todas as tarefas
router.get('/', listarTarefas);

// cria uma nova tarefa
router.post('/', criaTarefa);

// lista uma tarefa (pelo id)
router.get('/:id', listarTarefaId);

// atualiza uma tarefa (pelo id)
router.put('/:id', atualizarTarefa);

export default router;