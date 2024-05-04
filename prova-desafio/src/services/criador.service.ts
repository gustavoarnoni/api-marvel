import criadorModel from "../schema/criador.schema"
import { criadorTipo } from "../types/criador.type"

class criadorService {

    async create (criador: criadorTipo){
        const criadorCriado = await criadorModel.create(criador)
        return criadorCriado;
    }

    async findAll(){
        const criadorEncontrado = await criadorModel.find()
        return criadorEncontrado;
    }

    async findById(id: string){
        const criadorEncontrado = await criadorModel.findById(id)
        return criadorEncontrado;
    }

    async findByApiId(id: string){
        const criadorEncontrado = await criadorModel.findOne({ id }); 
        return criadorEncontrado;
    }
   
    async update(criadorId: string, criador: criadorTipo) {
        try {    
            
            const criadorAtualizado = await criadorModel.findOneAndUpdate(
                { id: criadorId },
                {
                    firstName: criador.firstName,
                    lastName: criador.lastName,
                    fullName: criador.fullName,
                    comics: criador.comics,
                    series: criador.series,
                    stories: criador.stories,
                    events: criador.events,
                },
                { new: true }
            );
    
            if (!criadorAtualizado) {
                throw new Error("Criador não encontrado");
            }
    
            return criadorAtualizado;
        } catch (error: any) {
            throw new Error(`Erro ao atualizar criador: ${error.message}`);
        }
    }

    async delete(id: string) {
        try {
            await criadorModel.findByIdAndDelete(id)
            return "Criador Removido"
        } catch (error) {
            throw new Error(`Erro ao remover criador: ${error}`)
        }
    }

}

export default new  criadorService;

