import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import GrupoProduto from '../models/grupoProdutos'

class CreateGrupoProduto {
    public async execute(nome: string): Promise<GrupoProduto> {
        const grupoRepository = getRepository(GrupoProduto);

        const checkNameGrup = await grupoRepository.findOne({
            where: { nome }
        })

        if (checkNameGrup) {
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await grupoRepository.create({
            nome,
        })

        await grupoRepository.save(grupoProduto)

        return (grupoProduto)


    }
    public async update(id: string, nome: string) {
        const repositoryGrupoProduto = getRepository(GrupoProduto)
        const checkNameGrup = await repositoryGrupoProduto.findOne({ where: { id: Number(id) } })
        let grupo

        if (checkNameGrup) {

            grupo = await repositoryGrupoProduto
                .createQueryBuilder().update()
                .set({ nome })
                .where({ id: Number(id) })
                .execute()

        }

        return grupo

    }

    public async delete(id: string) {
        const grupoRepository = getRepository(GrupoProduto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }
    public async getAll() {

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id: string) {

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.findOne({ where: { id: Number(id) } })
        return produtos
    }

}
export default CreateGrupoProduto
