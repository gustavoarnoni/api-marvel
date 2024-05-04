import quadrinhoModel from "../schema/quadrinho.schema"
import { quadrinhoTipo } from "../types/quadrinho.type"

class  quadrinhoService {

    async create (quadrinho: quadrinhoTipo){
        const quadrinhoCreated = await quadrinhoModel.create(quadrinho)
        return quadrinhoCreated;
    }

    async findAll(){
        const quadrinhoFound = await quadrinhoModel.find()
        return quadrinhoFound;
    }

    async findById(id: string){
        const quadrinhoFound = await quadrinhoModel.findById(id)
        return quadrinhoFound;
    }

    async findByApiId(id: string){
        const quadrinhoFound = await quadrinhoModel.findOne({ id }); // Busca pelo campo apiId
        return quadrinhoFound;
    }

    async update(quadrinhoId: string, quadrinho: quadrinhoTipo){
        try{
             const quadrinhoUpdated = await quadrinhoModel.findOneAndUpdate({ id: quadrinhoId},
          {
            title: quadrinho.title,
            variantDescription: quadrinho.description,
            description: quadrinho.description,
            modified: quadrinho.modified,
            textObjects: quadrinho.textObjects,
            resourceURI: quadrinho.resourceURI,
            series: quadrinho.series,
            dates: quadrinho.dates,
            prices: quadrinho.prices,
            thumbnail: quadrinho.thumbnail,
            creators: quadrinho.creators,
            characters: quadrinho.characters,
            stories: quadrinho.stories,
            events: quadrinho.events
        }, { new: true });
        
         if (!quadrinhoUpdated) {
            throw new Error("Quadrinho não encontrado");
        }

        return quadrinhoUpdated;
    }catch(error: any){
        throw new Error(`Erro ao atualizar quadrinho: ${error.message}`);
      }
    }

    async delete(id: string) {
        try {
            await quadrinhoModel.findByIdAndDelete(id)
            return "Quadrinho Removido"
        } catch (error) {
            throw new Error(`Erro ao remover quadrinho: ${error}`)
        }
    }
}

export default new quadrinhoService;

