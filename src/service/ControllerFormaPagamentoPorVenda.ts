import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import FormaPagamentoVenda from '../models/formaPagamentoVenda'

class FormaPagamentoController {
    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamentoVenda)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ id_venda: Number(id) , status:false})
            .execute()

    }
    public async update(id: string,id_venda:number ,status: boolean) {
        const repositoryFormaPagamento = getRepository(FormaPagamentoVenda)

        let  formpay= await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ id_venda,status })
                .where({ status:false })
                .execute()



        return formpay

    }

}

export default FormaPagamentoController
