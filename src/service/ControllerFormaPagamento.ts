import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import FormaPagamento from '../models/formaPagamento'

class FormaPagamentoController {
    public async execute(nome: string): Promise<FormaPagamento> {
        const formaPagamento = getRepository(FormaPagamento);

        const checkNameGrup = await formaPagamento.findOne({
            where: { nome }
        })

        if (checkNameGrup) {

            throw new AppError('Name grupo already used')
        }
        let ordem = 0
        const { count } = await formaPagamento.createQueryBuilder()
            .select("Count(nome)", "count")
            .getRawOne()

        console.log("O tamanho é : " + count)
        if (Number(count) === 0) {
            ordem = 1;
        } else if (Number(count) > 0) {
            ordem = Number(count) + 1;
        }

        const grupoProduto = await formaPagamento.create({
            nome,
            ordem
        })

        await formaPagamento.save(grupoProduto)

        return (grupoProduto)


    }
    public async update(id: string, nome: string) {
        const repositoryFormaPagamento = getRepository(FormaPagamento)
        const checkCliente = await repositoryFormaPagamento.findOne({ where: { id: Number(id) } })
        let pagamento

        if (checkCliente) {

            pagamento = await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ nome })
                .where({ id: Number(id) })
                .execute()

        }

        return pagamento

    }
    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamento)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }
    public async getAll() {

        const formaPagamento = await getRepository(FormaPagamento)

        const pagamento = await formaPagamento.find()
        return pagamento
    }

    public async get(id: string) {

        const formaPagamento = await getRepository(FormaPagamento)
        let nomeTexto
        const pagamento = await formaPagamento.findOne({ where: { ordem: Number(id) } })
        if (pagamento) {
            nomeTexto = pagamento.nome
        }
        // nomeTexto  = await formaPagamento
        // .createQueryBuilder()
        // .select("nome")
        // .where({ id })
        // .getOne();

        return nomeTexto
    }


}
export default FormaPagamentoController
