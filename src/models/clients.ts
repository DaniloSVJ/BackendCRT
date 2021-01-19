import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,

    JoinColumn,
} from 'typeorm';

// import User from './user';
/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('clients')
class Clientes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    bairro: string;

    @Column()
    cep: string;


    @Column()
    cidade: string;

    @Column()
    uf: string;

    @Column()
    telefone: string;

    @Column()
    CPF: string;

    @Column()
    RG: string;

    @Column('boolean')
    isAtivado: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
export default Clientes;
