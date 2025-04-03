const Tabela = () => {

    const tarefas = [
        {
            id: 1,
            titulo: "Janela",
            descricao: "Fechar a janela antes de sair de casa",
            status: "Pendente",
            data: "2025-4-3"
        },

        {
            id: 2,
            titulo: "Comida",
            descricao: "Guardar comida na geladeira antes de dormir",
            status: "Concluída",
            data: "2025-4-3"
        }
    ];

    const listaTarefas = tarefas.map(tarefa => {
    
        return(
            <div id={tarefa.id} className="flex gap-2 pb-2">
                <input type="checkbox" />
                <p>{tarefa.descricao}</p>
            </div>
        );
    });

    return(
        <>
            <div className="bg-slate-200 w-[60%] rounded-sm">
                <div className="flex flex-col gap-3 p-3">
                    {listaTarefas}  
                </div>
            </div>
        </>
    )
}

export default Tabela;