import { Request, Response } from "express";
import axios from "axios";
import personagemService from "../services/personagem.service";
import personagemSchema from "../schema/personagem.schema";


class personagemController {

    
    async create(req: Request, res: Response) {
        try {
            const personagemCriado = await personagemService.create(req.body);
            res.status(201).json(personagemCriado);
        } catch (error) {
            console.error("Erro ao criar personagem:", error);
            res.status(500).json({ error: "Erro ao criar personagem" });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const apiUrl = `https://gateway.marvel.com:443/v1/public/events/251/characters?&ts=1&apikey=4d8b684071536becc8b291effcdb9fa3&hash=f389ba6a3c6198976e6dc4431445aeb9`;
            const response = await axios.get(apiUrl);
            const personagemDados = response.data.data.results;
            const personagemEncontrado = await personagemSchema.insertMany(personagemDados);

            res.json(personagemEncontrado);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }
    }

    async findAllDataBase(req: Request, res: Response) {
        try {
            const personagem = await personagemService.findAll();
            return res.json(personagem);
        } catch (error) {
            console.error("Erro ao buscar personagens", error);
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }
    }

   
    async findByIdDataBase(req: Request, res: Response) {
        try {
            const id = req.params.id; 
            const personagemEncontrado = await personagemService.findByApiId(id);
            if (!personagemEncontrado) {
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            return res.json(personagemEncontrado);
        } catch (error) {
            console.error("Erro ao buscar personagem", error);
            return res.status(500).json({ error: "Erro ao buscar personagem" });
        }
    }
    
    async update(req: Request, res: Response) {
        try {
            const personagemId = req.params.id;
            const personagemAtualizadoDados = req.body;
            if (!personagemId) {
                return res.status(400).json({ error: "ID de personagem não fornecido" });
            }
            const personagemAtualizado = await personagemService.update(personagemId, personagemAtualizadoDados);
            res.json(personagemAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar personagem:", error);
            res.status(500).json({ error: "Erro ao atualizar personagem" });
        }
    }
    
    async delete(req: Request, res: Response) {
        const mensagem = await personagemService.delete(req.params.id)
        return res.json(mensagem)
    }    
}

export default new personagemController();





