import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import Funcionario from '../models/funcionario'

class FuncionarioController {
    public async execute(nome: string, cpf: string): Promise<Funcionario> {
        const funcionariosRepository = getRepository(Funcionario);

        const checkCPF = await funcionariosRepository.findOne({
            where: { cpf }
        })

        if (checkCPF) {
            throw new AppError('CPF Funcionario already used')
        }

        const funcionario = await funcionariosRepository.create({
            cpf,
            nome
        })

        await funcionariosRepository.save(funcionario)

        return funcionario


    }
    public async update(id: string, nome: string, cpf: string) {
        const repositoryFuncionario = getRepository(Funcionario)
        const checkCPF = await repositoryFuncionario.findOne({ where: { id } })
        let funcionario

        if (checkCPF) {

            funcionario = await repositoryFuncionario
                .createQueryBuilder().update()
                .set({ nome, cpf })
                .where({ id: Number(id) })
                .execute()

        }

        return funcionario

    }

    public async delete(id: string) {
        const funcionarioRepository = getRepository(Funcionario)

        await funcionarioRepository.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }
    public async getAll() {

        const funcionariosRepository = await getRepository(Funcionario)

        const funcionarios = await funcionariosRepository.find()
        return funcionarios
    }
    public async get(id: string) {

        const funcionarioRepository = await getRepository(Funcionario)

        const funcionario = await funcionarioRepository.findOne({ where: { id: Number(id) } })
        return funcionario
    }

}
export default FuncionarioController
