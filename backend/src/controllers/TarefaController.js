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
            res.status(404).json({error: "Não existe uma tarefa com o ID informado."})
        }
    }
    catch(error){
        res.status(500).json({error: "Erro ao listar tarefa"});
    }
}