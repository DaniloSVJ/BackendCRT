import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import ItemVenda from '../models/itemVenda'

class FormaPagamentoController {
    public async delete(id: string) {
        const formaPagamento = getRepository(ItemVenda)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ id_venda: Number(id) , status:"2"})
            .execute()

    }
    public async update(id: string,id_vendas:number ,status: number) {
        const repositoryFormaPagamento = getRepository(ItemVenda)

        let formpay = await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ id_vendas,status })
                .where({ id_vendas: Number(id) })
                .execute()



        return formpay

    }

}

export default FormaPagamentoController
