import { Request, Response } from "express";
import axios from "axios";
import quadrinhoService from "../services/quadrinho.service";
import quadrinhoSchema from "../schema/quadrinho.schema";


class quadrinhoController {

    async create(req: Request, res: Response) {
        try {
            const quadrinhoCriado = await quadrinhoService.create(req.body);
            res.status(201).json(quadrinhoCriado);
        } catch (error) {
            console.error("Erro ao criar personagem:", error);
            res.status(500).json({ error: "Erro ao criar personagem" });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const apiUrl = `https://gateway.marvel.com:443/v1/public/events/251/comics?&ts=1&apikey=4d8b684071536becc8b291effcdb9fa3&hash=f389ba6a3c6198976e6dc4431445aeb9`;
            const response = await axios.get(apiUrl);
            const quadrinhoDados = response.data.data.results;
            const quadrinhoEcontrado = await quadrinhoSchema.insertMany(quadrinhoDados);

            res.json(quadrinhoEcontrado);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }
    }

    async findAllDataBase(req: Request, res: Response) {
        try {
            const quadrinho = await quadrinhoService.findAll();
            return res.json(quadrinho);
        } catch (error) {
            console.error("Erro ao buscar quadrinho no banco de dados:", error);
            res.status(500).json({ error: "Erro ao buscar quadrinho no banco de dados" });
        }
    }

    
    async findByIdDataBase(req: Request, res: Response) {
        try {
            const id = req.params.id; 
            const quadrinhoEcontrado = await quadrinhoService.findByApiId(id); 
            if (!quadrinhoEcontrado) {
                return res.status(404).json({ error: "Quadrinho não encontrado" });
            }
            return res.json(quadrinhoEcontrado);
        } catch (error) {
            console.error("Erro ao buscar quadrinho por ID da API:", error);
            return res.status(500).json({ error: "Erro ao buscar quadrinho por ID da API" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const quadrinhoAtualizado = await quadrinhoService.update(req.params.id, req.body);
            if (!quadrinhoAtualizado) {
                return res.status(404).json({ error: "Quadrinho não encontrado" });
            }
            res.json(quadrinhoAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar quadrinho:", error);
            res.status(500).json({ error: "Erro ao atualizar quadrinho" });
        }
    }

    async delete(req: Request, res: Response) {
        const mensagem = await quadrinhoService.delete(req.params.id)
        return res.json(mensagem)
    }
    
}

export default new quadrinhoController();
