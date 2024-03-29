import { Request, Response } from "express";
import { camposNaoInformados, erroNaoEncontrado, erroServidor } from "../util/response.helper";
import { UsuarioModel } from "../models/usuario.model";
import repository from "../database/prisma.repository";


export class UsuarioController {
    public async criarUsuario(req: Request, res: Response) {
        try{
            const { nome, username, email, senha } = req.body;
            if(!nome || !username || !email || !senha)
            {
                return camposNaoInformados(res);
            }
            const usuario = new UsuarioModel(nome, username, email, senha);
            const result = await repository.usuario.create({
                data: usuario,
            });
            return res.status(201).send({
                ok: true,
                message: "Usuário criado com sucesso!",
                data: result
            });       
        } catch (error: any) {
            return erroServidor(res, error);
        }
    }
//Mostra usuario pelo ID
    public async obterUsuario(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const usuarioID = await repository.usuario.findUnique({
                where: {
                    id,
                },
            });
            if(!usuarioID)
            {
                return erroNaoEncontrado(res, "Usuario");
            }
            return res.status(200).send({
                ok: true,
                message: "Usuario encontrado com sucesso!",
                data: usuarioID
            });
        }
        catch(error: any) {
            return erroServidor(res, error);
        }
    }
//Atualiza um usuario
    public async atualizarUsuario(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const { nome } = req.body;
            if( !nome )
            {
                return res.status(400).send({
                    ok: false,
                    message: "Informe um campo para atualizar",
                });
            }
            const usuarioExiste = await repository.usuario.findUnique({
                where: {
                    id,
                },
            });
            if(!usuarioExiste)
            {
                return erroNaoEncontrado(res, "Usuario");
            }
            const result = await repository.usuario.update({
                where: {
                    id,
                },
                data: {
                    nome,
                },
            });
            return res.status(200).send({
                ok: true,
                message: "Usuário atualizado com sucesso!",
                data: result,
            });
        }
        catch(error: any) {
            return erroServidor(res, error);
        }
    }
//Deleta um usuario
    public async deletarUsuario(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const usuarioExiste = await repository.usuario.findUnique({
                where: {
                    id,
                },
            });
            if(!usuarioExiste)
            {
                return erroNaoEncontrado(res, "Usuario");
            }
            await repository.usuario.delete({
                where: {
                    id,
                },
            });
            return res.status(200).send({
                ok: true,
                message: "Usuário deletado com sucesso!",
            });
        }
        catch(error: any) {
            return erroServidor(res, error);
        }
    }
//Listar todos os usuarios
    public async listarUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await repository.usuario.findMany();
            return res.status(200).send({
                ok: true,
                message: "Todos os usuarios",
                data: usuarios,
            });
        } catch (error: any) {
            return erroServidor(res, error);
        }
    }
}