import personagemModel from "../schema/personagem.schema"
import { personagemTipo } from "../types/personagem.type"

class personagemService {

    async create (personagem: personagemTipo){
        const personagemEncontrado = await personagemModel.create(personagem)
        return personagemEncontrado;
    }

    async findAll(){
        const personagemEncontrado = await personagemModel.find()
        return personagemEncontrado;
    }

    async findById(id: string){
        const personagemEncontrado = await personagemModel.findById(id)
        return personagemEncontrado;
    }

    async findByApiId(id: string){
        const personagemEncontrado = await personagemModel.findOne({ id }); 
        return personagemEncontrado;
    }


    async update(personagemId: string, personagem: personagemTipo) {
        try {    
            
            const personagemAtualizado = await personagemModel.findOneAndUpdate(
                { id: personagemId }, 
                {
                    name: personagem.name,
                    description: personagem.description,
                    thumbnail: personagem.thumbnail,
                    resourceURI: personagem.resourceURI, 
                    comics: personagem.comics,
                    series: personagem.series,
                    stories: personagem.stories,
                    events: personagem.events,
                },
                { new: true }
            );
    
            if (!personagemAtualizado) {
                throw new Error("Personagem não encontrado");
            }
    
            return personagemAtualizado;
        } catch (error: any) {
            throw new Error(`Erro ao atualizar personagem: ${error.message}`);
        }
    }
    
    async delete(id: string) {
        try {
            await personagemModel.findByIdAndDelete(id)
            return "Personagem Removido"
        } catch (error) {
            throw new Error(`Erro ao remover personagem: ${error}`)
        }
    }
    
}

export default new  personagemService;

