import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
    JoinColumn,
  } from 'typeorm';



  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */

  @Entity('funcionario')
  class funcionario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


  }
  export default funcionario;