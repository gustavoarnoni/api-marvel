import { quadrinhoDadosSchema } from "../schema/criador.schema"; 
import { SerieSchema } from "../schema/criador.schema"; 
import { StorySchema } from "../schema/criador.schema"; 
import { EventoSchema } from "../schema/criador.schema"; 

export interface criadorTipo {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string,
    comics: typeof quadrinhoDadosSchema,
    series: typeof SerieSchema[],
    stories: typeof StorySchema[],
    events: typeof EventoSchema[],
}
