import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import AddProdutoEstoque from './ControllerProdutoEstoque'

import Produto from '../models/produtos'
import { request, response } from 'express'
interface Request {

    nome: string,
    codigo: string,
    custo: number,
    valor_venda: number,
    id_grupo: number
    estoqueMin: number,
    estoqueMax: number,
    embalagem: string,
    quantidade: number,
    descricaoR: string,
    descricaoGeral: string

}


class CreateProduto {
    public async execute({ nome, codigo, custo, valor_venda, id_grupo, estoqueMin, estoqueMax, embalagem, quantidade, descricaoR, descricaoGeral }: Request): Promise<Produto> {
        const produdoRepository = getRepository(Produto)
        const checkProdutoExist = await produdoRepository.findOne({
            where: { nome }
        })

        if (checkProdutoExist) {
            throw new AppError('Name product already used')
        }

        const produto = produdoRepository.create({
            nome,
            codigo,
            custo,
            valor_venda,
            id_grupo,
            estoqueMin,
            estoqueMax,
            embalagem,
            quantidade,
            descricaoR,
            descricaoGeral

        })

        await produdoRepository.save(produto)
        return produto;
    }
    public async update(id: string, nome: string, codigo: string, custo: number, valor_venda: number, id_grupo: number) {
        const repositoryProduto = getRepository(Produto)
        let checkProduto = await repositoryProduto.findOne({ where: { id } })
        let produto



        if (checkProduto) {

            checkProduto.nome = nome
            checkProduto.codigo = codigo
            checkProduto.custo = custo
            checkProduto.valor_venda = valor_venda
            checkProduto.id_grupo = id_grupo
            repositoryProduto.save(checkProduto)

        }

        produto = checkProduto
        return produto


    }

    public async delete(id: string) {
        const grupoRepository = getRepository(Produto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }

    public async getAll() {

        const estoqueRepository = await getRepository(Produto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(codigo: string) {

        const estoqueRepository = await getRepository(Produto)

        let produtos = await estoqueRepository.findOne({ where: { codigo } })

        if (produtos) {
            return produtos
        }


    }



}

export default CreateProduto
