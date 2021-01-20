import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import FormaPagamentoVenda from '../models/formaPagamentoVenda'

class FormaPagamentoControllerVenda {

    public async execute(id_venda: number, valor: number, id_forma_pagmet: number, ordem: number, formapagamento: string, status: boolean): Promise<FormaPagamentoVenda> {
        const formaPagamento = getRepository(FormaPagamentoVenda);

        const formPayVenda = await formaPagamento.create({
            id_venda,
            valor,
            id_forma_pagmet,
            ordem,
            formapagamento,
            status

        })

        await formaPagamento.save(formPayVenda)

        return (formPayVenda)


    }
    public async update(id: string, valor: number) {
        const repositoryFormaPagamento = getRepository(FormaPagamentoVenda)
        const checkFormPay = await repositoryFormaPagamento.findOne({ where: { id } })
        let formpay

        if (checkFormPay) {

            formpay = await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ valor })
                .where({ id: Number(id) })
                .execute()

        }

        return formpay

    }
    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamentoVenda)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ id: Number(id), status: false })
            .execute()

    }
    public async getAll() {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.find()
        return pagamento
    }

    public async getAllStatus() {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento
            .createQueryBuilder()
            .where({ status: false })
            .getMany();

        return pagamento
    }
    public async get(id: string) {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.findOne({ where: { id: Number(id) } })
        return pagamento
    }

    public async soma(id: string) {
        const somaPorVenda = getRepository(FormaPagamentoVenda)

        const { sum } = await somaPorVenda.createQueryBuilder()
            .select("SUM(valor)", "sum")
            .where({ status: false, id_venda: Number(id) })
            .getRawOne();

        const total = Number(sum)
        return total
    }

}
export default FormaPagamentoControllerVenda
