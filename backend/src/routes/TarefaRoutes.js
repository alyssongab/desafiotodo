import express from 'express';
import {
    listarTarefas,
    criaTarefa,
    listarTarefaId,
    atualizarTarefa,
    deletarTarefa
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

// deleta uma tarefa
router.delete('/:id', deletarTarefa);

export default router;