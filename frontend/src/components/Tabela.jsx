import { useEffect, useState } from "react";
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Tabela = () => {

    const [tarefas, setTarefas] = useState([]);
    const [tarefaExpandidaId, setTarefaExpandidaId] = useState(null);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [tarefaEmEdicao, setTarefaEmEdicao] = useState({
        titulo: '',
        descricao: '',
        stats: ''
    });

    const toggleDetalhes = (id) => {
        if (tarefaExpandidaId === id) {
            setTarefaExpandidaId(null); 
        } else {
            setTarefaExpandidaId(id);
            setModoEdicao(false); // esconde se ja tiver mostrando
        }
    };
    
    const editarTarefa = (id) => {
        const tarefaSelecionada = tarefas.find(t => t.id === id);
        setTarefaExpandidaId(id);
        setModoEdicao(true);
        setTarefaEmEdicao({
            titulo: tarefaSelecionada.titulo,
            descricao: tarefaSelecionada.descricao,
            stats: tarefaSelecionada.stats
        });
    };

    // pra mostrar no status (nao editavel)
    const statusAmigavel = {
        PENDENTE: "Pendente",
        EM_ANDAMENTO: "Em Andamento",
        CONCLUIDA: "Concluída"
    };
    

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
        try {
            const response = await fetch(`http://localhost:3000/tarefas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarefaAtualizada)
            });
    
            if (response.ok) {
                fetchTarefas();
                setTarefaExpandidaId(null);
            } else {
                alert(response.error || "Campos obrigatórios não preenchidos");
                console.error('Erro ao atualizar:', response.status);
            }
        } catch (error) {
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
        const estaExpandida = tarefaExpandidaId === tarefa.id;
    
        return (
            <div key={tarefa.id} className="grid grid-cols-1 border-b border-gray-300">
                <div className="grid grid-cols-2 items-center">
                    <div className="flex justify-start">
                        <p className="text-xl p-3 flex items-center">
                            {tarefa.titulo}
                            <ChevronDown
                                className="pl-1 pt-1 w-6 cursor-pointer"
                                onClick={() => toggleDetalhes(tarefa.id)}
                            />
                        </p>
                    </div>
    
                    <div className="flex justify-end gap-2 pr-3">
                        <Trash2
                            className="cursor-pointer hover:scale-105"
                            onClick={() => deleteTarefa(tarefa.id)}
                        />
                        <Pencil
                            className="cursor-pointer hover:scale-105"
                            onClick={() => editarTarefa(tarefa.id)}
                        />
                    </div>
                </div>
    
                {/* detalhes da tarefa */}
                {estaExpandida && (
                    <div className="p-3 bg-gray-100 flex flex-col gap-2">
                        {modoEdicao ? (
                            <>
                                <label className="text-sm">Título</label>
                                <input
                                    type="text"
                                    className="p-2 border rounded"
                                    value={tarefaEmEdicao.titulo}
                                    onChange={(e) => setTarefaEmEdicao({ ...tarefaEmEdicao, titulo: e.target.value.trim() })}
                                    required
                                />
                                <label className="text-sm">Descrição</label>
                                <textarea
                                    className="p-2 border rounded"
                                    value={tarefaEmEdicao.descricao}
                                    onChange={(e) => setTarefaEmEdicao({ ...tarefaEmEdicao, descricao: e.target.value })}
                                />
                                <label className="text-sm">Status</label>
                                <select
                                    className="p-2 border rounded"
                                    value={tarefaEmEdicao.stats}
                                    onChange={(e) => setTarefaEmEdicao({ ...tarefaEmEdicao, stats: e.target.value })}
                                >
                                    <option value="PENDENTE">Pendente</option>
                                    <option value="EM_ANDAMENTO">Em Andamento</option>
                                    <option value="CONCLUIDA">Concluída</option>
                                </select>

                                <label className="text-sm">Data de criação</label>
                                <input
                                    type="text"
                                    value={new Date(tarefa.dt_criacao).toLocaleString()}
                                    readOnly
                                    className="p-2 border rounded bg-gray-200"
                                />
                                <button type="button" onClick={() => updateTarefa(tarefa.id, tarefaEmEdicao)} className="mt-2 bg-[#6C63FF] text-white p-2 rounded cursor-pointer hover:scale-105">
                                    Salvar alterações
                                </button>
                            </>
                        ) : (
                            <>
                                <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                                <p><strong>Status:</strong> {statusAmigavel[tarefa.stats]}</p>
                                <p><strong>Criada em:</strong> {new Date(tarefa.dt_criacao).toLocaleString()}</p> {/* data e hora atual */}
                            </>
                        )}
                    </div>
                )}
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