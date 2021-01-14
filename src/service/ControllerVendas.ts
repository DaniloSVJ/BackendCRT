import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import Vendas from '../models/vendas'

class ContreollerVenda {
    public async execute(id_cliente: number, funcionario: string): Promise<Vendas> {
        const vendaRepository = getRepository(Vendas);

        const vendaProduto = await vendaRepository.create({
            id_cliente,
            funcionario,
        })

        await vendaRepository.save(vendaProduto)

        return (vendaProduto)


    }
    public async update(id: string, funcionario: string, id_cliente: number) {
        const repositoryVenda = getRepository(Vendas)
        const checkCliente = await repositoryVenda.findOne({ where: { id } })
        let venda

        if (checkCliente) {

            venda = await repositoryVenda
                .createQueryBuilder().update()
                .set({ funcionario, id_cliente })
                .where({ id: Number(id) })
                .execute()

        }

        return venda

    }

    public async delete(id: string) {
        const deleteVendas = getRepository(Vendas)

        await deleteVendas.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }
    public async getAll() {

        const estoqueRepository = await getRepository(Vendas)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id: string) {

        const estoqueRepository = await getRepository(Vendas)

        const produtos = await estoqueRepository.findOne({ where: { id: Number(id) } })
        return produtos
    }






}
export default ContreollerVenda
