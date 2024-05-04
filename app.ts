import express from 'express';
import mongoose from 'mongoose';
import { apiRotas, bdRotas } from './routes';
import * as request from 'supertest';

const app = express();

class App {
    public express: express.Application

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.rotas();
    }

    public middleware() {
        this.express.use(express.json());
    }

    public async database() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/marvel');
            console.log("Sucesso ao conectar com o banco de dados");
        } catch (error) {
            console.error("Não foi possível conectar na base de dados:", error);
        }
    }

    public rotas() {
        this.express.use('/api', apiRotas);
        this.express.use('/bd', bdRotas);
    }
}
export default new App().express;
