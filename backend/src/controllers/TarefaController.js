import Tarefa from '../models/Tarefa.js';

// endpoint get (all) /tarefas
export const listarTarefas = async (req, res) => {
    try{
        const tarefas = await Tarefa.findAll();
        res.status(200).json(tarefas);
    }
    catch(error){
        res.status(500).json({error: "Erro ao listar tarefas"});
    }
}

// endpoint post tarefa
export const criaTarefa = async (req, res) => {
    try{

        // verifica os campos obrigatorios
        const { titulo, stats } = req.body;
        if(!titulo || !stats){
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos!" });
        }

        const novaTarefa = await Tarefa.create(req.body);
        res.status(201).json(novaTarefa);
    }
    catch(error){
        res.status(400).json({error: "Erro ao criar tarefa"});
    }
}

// endpoint get (one) tarefa
export const listarTarefaId = async (req, res) => {
    try{
        const tarefa = await Tarefa.findByPk(req.params.id);

        if(tarefa){
            res.status(200).json(tarefa);
        }
        else{
            return res.status(404).json({error: "Não existe uma tarefa com o ID informado."});
        }
    }
    catch(error){
        res.status(500).json({error: "Erro ao listar tarefa"});
    }
}

// endpoint put (por id) tarefa
export const atualizarTarefa = async (req, res) => {
    try{
        const tarefa = await Tarefa.findByPk(req.params.id);

        if (!tarefa) {
            return res.status(404).json({ error: "Não existe uma tarefa com o ID informado." });
        }

        // verifica os campos obrigatorios
        const { titulo, stats } = req.body;
        if(!titulo || !stats){
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos!" });
        }

        await tarefa.update(req.body);
        res.status(200).json(tarefa);
        
    }
    catch(error){
        res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
}

// endpoint delete (por id) tarefa
export const deletarTarefa = async (req, res) => {
    try{
        const tarefa = await Tarefa.findByPk(req.params.id);

        if(!tarefa){
            return res.status(404).json({ error: "Não existe uma tarefa com o ID informado." });
        }

        tarefa.destroy(req.params.id);
        res.status(200).json({ success: "Tarefa deletada com sucesso" });
    }
    catch(error){
        res.status(500).json({error: "Erro ao deletar tarefa"});
    }
}