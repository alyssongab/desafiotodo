import { useState } from 'react';

const Tarefa = () => {
    const [novaTarefa, setNovaTarefa] = useState({
        titulo: '',
        descricao: '',
        stats: 'PENDENTE'
    });

    const insertTarefa = async () => {
        try {

            const response = await fetch('http://localhost:3000/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novaTarefa)
            });

            const responseData = await response.json();

            if (responseData.ok) {
                console.log('Tarefa adicionada com sucesso!');
                setNovaTarefa({ titulo: '', descricao: '', stats: 'PENDENTE' });
            }
            
        } catch (error) {
            console.error('Erro ao inserir tarefa: ', error);
        }
    };

    const handleChange = ({ target: { name, value } }) => {
        setNovaTarefa({ ...novaTarefa, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (novaTarefa.titulo.trim() === '') {
            alert('O título da tarefa é obrigatório.');
            return;
        }
        insertTarefa();
        setNovaTarefa({ titulo: '', descricao: '', stats: 'pendente' });
    };

    return (
        <div className="w-full p-3 flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 w-full sm:w-auto">
                <input
                    type="text"
                    name="titulo"
                    placeholder="Título da tarefa (obrigatório)"
                    className="w-full p-2 bg-slate-300 rounded-2xl"
                    value={novaTarefa.titulo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="descricao"
                    placeholder="Descrição da tarefa (opcional)"
                    className="w-full p-2 bg-slate-300 rounded-2xl"
                    value={novaTarefa.descricao}
                    onChange={handleChange}
                />
                <select
                    name="status"
                    value={novaTarefa.stats}
                    onChange={handleChange}
                    className="w-full p-2 bg-slate-300 rounded-2xl"
                >
                    <option value="PENDENTE">Pendente</option>
                    <option value="EM_ANDAMENTO">Em Andamento</option>
                    <option value="CONCLUIDA">Concluída</option>
                </select>
                <button
                    type="submit"
                    className="bg-[#6C63FF] p-2 rounded-3xl text-white cursor-pointer hover:scale-105"
                >
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default Tarefa;