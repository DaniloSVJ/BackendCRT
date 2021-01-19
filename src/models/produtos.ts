import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import Grupo from './grupoProdutos';
import Estoque from './estoque'

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('produtos')
class Produtos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    nome: string;

    @Column()
    imagem: string;

    @Column('decimal')
    custo: number;

    @Column('decimal')
    valor_venda: number;

    @Column()
    id_grupo: number;

    @OneToOne(() => Grupo) // Many Produtoss to a user
    @JoinColumn({ name: 'id_grupo' })
    grupo: Grupo

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
export default Produtos;
