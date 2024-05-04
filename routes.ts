import { Router } from 'express';
import personagemController from './prova-desafio/src/controller/personagem.controller';
import criadorController from './prova-desafio/src/controller/criador.controller';
import quadrinhoController from './prova-desafio/src/controller/quadrinho.controller';

const apiRotas = Router();
const bdRotas  = Router();

//PERSONAGEM
apiRotas.get('/personagens', personagemController.findAll);
bdRotas.get('/personagens', personagemController.findAllDataBase);         
bdRotas.get('/personagens/:id', personagemController.findByIdDataBase);   
bdRotas.post('/personagens', personagemController.create);                  
bdRotas.put('/personagens/:id', personagemController.update);              
bdRotas.delete('/personagens/:id', personagemController.delete);   

///CRIADOR
apiRotas.get('/criadores', criadorController.findAll); 
bdRotas.get('/criadores', criadorController.findAllDataBase);        
bdRotas.get('/criadores/:id', criadorController.findByIdDataBase);  
bdRotas.post('/criadores', criadorController.create);                  
bdRotas.put('/criadores/:id', criadorController.update);            
bdRotas.delete('/criadores/:id', criadorController.delete);

//QUADRINHO
apiRotas.get('/quadrinhos', quadrinhoController.findAll); 
bdRotas.get('/quadrinhos', quadrinhoController.findAllDataBase);         
bdRotas.get('/quadrinhos/:id', quadrinhoController.findByIdDataBase);   
bdRotas.post('/quadrinhos', quadrinhoController.create);                    
bdRotas.delete('/quadrinhos/:id', quadrinhoController.delete);             
bdRotas.put('/quadrinhos/:id', quadrinhoController.update); 

export {
    apiRotas, bdRotas
}
