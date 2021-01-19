import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import Venda from './vendas';

import FormOfPayment from './grupoProdutos';
/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('forma_pagamento_venda')
class Forma_pagamento_venda {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_venda: number;

    @Column('decimal')
    valor: number;

    @Column()
    id_forma_pagmet: number;

    @Column('decimal')
    ordem: number;

    @Column('boolean')
    status: boolean;

    @Column()
    formapagamento: string;

    @OneToOne(() => Venda)
    @JoinColumn({ name: 'id_forma_pagmet' })
    FormOfPayment: FormOfPayment;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //  @OneToOne(() => User) // Many appointments to a user
    // @JoinColumn({ name: 'provider_id' }) // The column that will identify the provider
    //provider: User;

    // @Column('timestamp with time zone')
    // date: Date;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
}
export default Forma_pagamento_venda;
