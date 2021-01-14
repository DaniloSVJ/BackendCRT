import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    //ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';

import Venda from './vendas';


/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('items_vendas')
class ItemVenda {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    qtdvendido: number;

    @Column('decimal')
    valor_vendido: number;

    @Column('decimal')
    status: number;

    @Column('decimal')
    id_vendas: number;

    @Column()
    nome_produto: string;

    @Column()
    codigo_produto: string;

    @Column('decimal')
    ordem: number;



    @Column()
    id_produtos: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default ItemVenda;
