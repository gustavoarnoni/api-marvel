import { texto } from "../schema/quadrinho.schema";
import { SerieSchema } from "../schema/quadrinho.schema";
import { dataSchema } from "../schema/quadrinho.schema";
import { precoSchema } from "../schema/quadrinho.schema";
import { thumbnailSchema } from "../schema/quadrinho.schema";
import { criadorSchema } from "../schema/quadrinho.schema";
import { personagemSchema } from "../schema/quadrinho.schema";
import { storySchema } from "../schema/quadrinho.schema";
import { eventoSchema } from "../schema/quadrinho.schema";



export interface quadrinhoTipo {
    id: Number,
    title: String,
    description: String,
    modified: String,
    textObjects: typeof texto[],
    resourceURI: String,
    series: typeof SerieSchema[],
    dates: typeof dataSchema[],
    prices: typeof precoSchema[],
    thumbnail: typeof thumbnailSchema[],
    creators: typeof criadorSchema[],
    characters: typeof personagemSchema[],
    stories: typeof storySchema[],
    events: typeof eventoSchema[],
}