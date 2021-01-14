import { getRepository } from 'typeorm'
import AppError from '../error/AppErro'
import Cliente from '../models/clients'

interface Request {

    nome: string,
    CPF: string,
    RG: string,
    telefone: string,
    cep: string,
    bairro: string,
    cidade: string,
    uf: string,
    isAtivado: boolean,

}
class Clientes {

    public async execute({ nome, CPF, RG, telefone, cep, bairro, cidade, uf, isAtivado }: Request): Promise<Cliente> {
        const repositoryCliente = getRepository(Cliente)

        const checkCliente = await repositoryCliente.findOne({
            where: { CPF }
        })

        if (checkCliente) {
            throw new AppError('CPF já cadastrado')
        }

        const cliente = repositoryCliente.create({
            nome,
            CPF,
            RG,
            telefone,
            cep,
            bairro,
            cidade,
            uf,
            isAtivado
        })

        await repositoryCliente.save(cliente)

        return cliente
    }

    public async update(
        id: string,
        nome: string,
        CPF: string,
        RG: string,
        telefone: string,
        cep: string,
        bairro: string,
        cidade: string,
        uf: string,
        isAtivado: boolean
    ) {
        const repositoryCliente = getRepository(Cliente)
        const checkCliente = await repositoryCliente.findOne({ where: { id: Number(id) } })

        if (checkCliente) {
            checkCliente.CPF = CPF,
                checkCliente.nome = nome,
                checkCliente.RG = RG,
                checkCliente.telefone = telefone,
                checkCliente.cep = cep,
                checkCliente.bairro = bairro,
                checkCliente.cidade = cidade,
                checkCliente.uf = uf
            checkCliente.isAtivado = isAtivado

            repositoryCliente.save(checkCliente)
        }
        const cliente = checkCliente

        return cliente

    }
    public async delete(id: string) {
        const grupoRepository = getRepository(Cliente)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }
    public async getAll() {

        const clienteRepository = await getRepository(Cliente)

        const clientes = await clienteRepository.find()
        return clientes
    }
    public async get(id: string) {

        const clienteRepository = await getRepository(Cliente)

        const produtos = await clienteRepository.findOne({ where: { id: Number(id) } })
        return produtos
    }

}

export default Clientes
