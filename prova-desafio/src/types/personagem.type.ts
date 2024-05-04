import { SerieSchema } from "../schema/quadrinho.schema";
import { thumbnailSchema } from "../schema/quadrinho.schema";
import { storySchema } from "../schema/quadrinho.schema";
import { eventoSchema } from "../schema/quadrinho.schema";
import { quadrinhoDadosSchema } from "../schema/criador.schema";


export interface personagemTipo{
    name: String,
    description: String,
    thumbnail: typeof thumbnailSchema,
    resourceURI: String, 
    comics: typeof quadrinhoDadosSchema,
    series: typeof SerieSchema[],
    stories: typeof storySchema[],
    events: typeof eventoSchema[],
}

