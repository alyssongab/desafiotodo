import { useEffect, useState } from "react";
import tarefas from '../data.js'
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Tabela = ({titulo, descricao, status, dataCriacao}) => {

    const[tarefas, setTarefas] = useState([]);

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

    const deleteTarefa = async (id) => {
        try{
            await fetch(`http://localhost:3000/tarefas/${id}`,{
                method: 'DELETE'
            });

            fetchTarefas();
        }
        catch(error){
            console.error('Erro ao deletar tarefa: ', error);
        }
    }

    const listaTarefas = tarefas.map(tarefa => {
    
        return(
            <div id={tarefa.id} className="flex items-center justify-between">
                <div className="flex">
                    <input type="checkbox" className="w-5"/>
                    <p className="text-xl p-3 flex items-center">{tarefa.titulo}<ChevronDown/></p>
                </div>

                <div className="flex gap-3 pr-3">
                    <Trash2
                     className="cursor-pointer hover:scale-105"
                     onClick={() => deleteTarefa(tarefa.id)}/>
                    <Pencil className="cursor-pointer hover:scale-105"/>
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