import { useEffect, useState } from "react";
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Tabela = ({titulo, descricao, status, dataCriacao}) => {

    const[tarefas, setTarefas] = useState([]);

    const[update, setUpdate] = useState(false);

    useEffect(() => {
        fetchTarefas();
    }, []) // array vazio pra renderizar na montagem do componente

    // para buscar as tarefas no backend
    const fetchTarefas = async () => {
        try{
            const response = await fetch('http://localhost:3000/tarefas');
            const data = await response.json();
            setTarefas(data);
        }
        catch(error){
            console.error('Erro ao buscar tarefas: ', error);
        }
    }


    // requisicao para atualizar tarefa
    const updateTarefa = async (id, tarefaAtualizada) => {
        try{
            const response = fetch(`http://localhost/tarefas/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(tarefaAtualizada)
            });

            (response.ok) ? fetchTarefas() : console.error('Erro ao atualizar:', response.status);
        }
        catch(error){
            console.error('Erro ao atualizar tarefa: ', error);
        }
    }

    // requisicao para deletar tarefa
    const deleteTarefa = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/tarefas/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            (response.ok) ? fetchTarefas() : console.error('Erro ao deletar tarefa:', response.status);

            fetchTarefas();
        }
        catch(error){
            console.error('Erro ao deletar tarefa: ', error);
        }
    }

    const listaTarefas = tarefas.map(tarefa => {
    
        return(
            <div id={tarefa.id} className="grid grid-cols-3 items-center grid-">
                <div className="flex justify-start">
                    <p className="text-xl p-3 flex items-center">{tarefa.titulo}<ChevronDown className="pl-1 pt-1 w-6 cursor-pointer"/></p>
                </div>

                <div className="flex justify-center">
                    <select name="status" id="status" className="text-center bg-white p-1">
                            <option value="pendente" selected>Pendente</option>
                            <option value="andamento">Em Andamento</option>
                            <option value="concluida">Concluída</option>
                    </select>
                </div>

                <div className="flex justify-end gap-2 pr-3">
                    <Trash2
                     className="cursor-pointer hover:scale-105"
                     onClick={() => deleteTarefa(tarefa.id)}/>

                    <Pencil 
                    className="cursor-pointer hover:scale-105"
                    onClick={() => {}}/>
                    {/* ()) => updateTarefa(tarefa.id, tarefa) */}
                </div>


            </div>
        );
    });

    return(
        <>
            <div className="bg-slate-200 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[30%] rounded-sm">
                <div className="flex flex-col gap-1 pl-2">
                    {listaTarefas}  
                </div>
            </div>
        </>
    )
}

export default Tabela;