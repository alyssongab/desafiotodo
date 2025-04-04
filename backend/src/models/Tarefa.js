import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Tarefa extends Model {}

Tarefa.init(
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            defaultValue: "Nenhuma descrição adicionada"
        },
        stats: {
            type: DataTypes.ENUM({
                values: ["PENDENTE", "EM_ANDAMENTO", "CONCLUIDA"]
            })
        },

    },
    {
        sequelize,
        modelName: 'Tarefa',
        tableName: 'tarefas',
        timestamps: true,
        createdAt: 'dt_criacao',
        updatedAt: 'dt_atualizacao'
    }

);

export default Tarefa;