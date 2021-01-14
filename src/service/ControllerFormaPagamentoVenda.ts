import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import FormaPagamentoVenda from '../models/formaPagamentoVenda'

class FormaPagamentoController {
    public async execute(id_venda: number, valor: number, id_forma_pagmet: number): Promise<FormaPagamentoVenda> {
        const formaPagamento = getRepository(FormaPagamentoVenda);

        const formPayVenda = await formaPagamento.create({
            id_forma_pagmet,
            id_venda,
            valor

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
            .where({ id: Number(id) })
            .execute()

    }
    public async getAll() {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.find()
        return pagamento
    }
    public async get(id: string) {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.findOne({ where: { id: Number(id) } })
        return pagamento
    }

}
export default FormaPagamentoController
