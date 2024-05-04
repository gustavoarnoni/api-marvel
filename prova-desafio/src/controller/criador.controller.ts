import { Request, Response } from "express";
import axios from "axios";
import criadorSchema from "../schema/criador.schema";
import criadorService from "../services/criador.service";

class criadorController{

    async create(req: Request, res: Response) {
        try {
            const criadorCriado = await criadorService
            .create(req.body);
            res.status(201).json(criadorCriado);
        } catch (error) {
            console.error("Erro ao criar um criador:", error);
            res.status(500).json({ error: "Erro ao criar o criador" });
        }
    }


    async findAll(req: Request, res: Response) {
        try {
            const apiUrl = `https://gateway.marvel.com:443/v1/public/events/251/creators?&ts=1&apikey=4d8b684071536becc8b291effcdb9fa3&hash=f389ba6a3c6198976e6dc4431445aeb9`;
            const response = await axios.get(apiUrl);
            const criadorDados = response.data.data.results;
            const criadorEncontrado = await criadorSchema
            .insertMany(criadorDados);
            res.json(criadorEncontrado);
        } catch (error) {
            console.error("Erro ao buscar o criador:", error);
            res.status(500).json({ error: "Erro ao buscar o criador" });
        }
    }

    
    async findAllDataBase(req: Request, res: Response) {
        try {
            const criador = await criadorService
            .findAll();
            return res.json(criador);
        } catch (error) {
            console.error("Erro ao buscar o criador no banco de dados:", error);
            res.status(500).json({ error: "Erro ao buscar os criadores no banco de dados" });
        }
    }

    
  
    async findByIdDataBase(req: Request, res: Response) {
        try {
            const id = req.params.id; 
            const criadorEncontrado = await criadorService
            .findByApiId(id); 
            if (!criadorEncontrado) {
                return res.status(404).json({ error: "Criador não encontrado" });
            }
            return res.json(criadorEncontrado);
        } catch (error) {
            console.error("Erro ao buscar criador:", error);
            return res.status(500).json({ error: "Erro ao buscar o criador" });
        }
    }
    
    async update(req: Request, res: Response) {
        try {
            const criadorId = req.params.id;
            const criadorDados = req.body;
            if (!criadorId) {
                return res.status(400).json({ error: "Sem Id do criador" });
            }
            const criadorAtualizado = await criadorService
            .update(criadorId, criadorDados);
            res.json(criadorAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar o criador:", error);
            res.status(500).json({ error: "Erro ao atualizar o criador" });
        }
    }

    
    async delete(req: Request, res: Response) {
        const mensagem = await criadorService.delete(req.params.id)
        return res.json(mensagem)
    }
}

export default new criadorController();