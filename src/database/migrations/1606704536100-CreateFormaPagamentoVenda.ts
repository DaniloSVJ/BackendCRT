import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormaPagamentoVenda1606704536100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'forma_pagamento_venda',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            isGenerated: true

                        },
                        {
                            name: 'valor',
                            type: 'decimal',
                            precision: 10,
                            scale: 2,
                        },
                        {
                            name: 'id_venda',
                            type: 'int',
                        },
                        {
                            name: 'id_forma_pagmet',
                            type: 'int',
                        },
                        {
                            name: 'ordem',
                            type: 'int',
                        },
                        {
                            name: 'formapagamento',
                            type: 'varchar',
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp with time zone',
                            default: 'now()',
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp with time zone',
                            default: 'now()',
                        },


                    ],
                    foreignKeys: [

                        {

                            name: 'foreignKeyForma',
                            referencedTableName: 'forma_pagamento',
                            referencedColumnNames: ['id'],
                            columnNames: ['id_forma_pagmet'],
                            onDelete: 'SET NULL',
                            onUpdate: 'CASCADE',

                        }
                    ]

                })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("forma_pagamento_venda", "foreignKeyV");
        await queryRunner.dropForeignKey("forma_pagamento_venda", "foreignKeyForma");
        await queryRunner.dropTable('forma_pagamento');
    }

}
