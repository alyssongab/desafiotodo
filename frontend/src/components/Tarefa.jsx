const Tarefa = () => {

    return(
        <div className="w-full p-3">
            <form action="" className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-7">
                <div className="sm:w-[50vw] xl:w-[30vw] ">
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicionar uma nova tarefa"
                     className="w-full p-2 bg-slate-300 rounded-2xl"/>
                </div>

                <div>
                    <button className="bg-[#6C63FF] p-2 w-full sm:w-[150px] rounded-3xl text-white cursor-pointer hover:scale-105">Adicionar</button>
                </div>
            </form>
        </div>
    )
}

export default Tarefa;