import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFormaItemVenda1606704553170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'items_vendas',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'nome_produto',
                        type: 'varchar',
                    },
                    {
                        name: 'codigo_produto',
                        type: 'varchar',
                    },
                    {
                        name: 'ordem',
                        type: 'decimal',
                    },
                    {
                        name: 'qtdvendido',
                        type: 'decimal',
                        precision: 10,
                        scale: 1,
                    },
                    {
                        name: 'valor_vendido',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'id_vendas',
                        type: 'int',

                    },
                    {
                        name: 'id_produtos',
                        type: 'int',

                    },
                    {
                        name: 'status',
                        type: 'decimal',
                    }

                ],
                foreignKeys: [
                    {

                        name: 'foreignKeyPrduto',
                        referencedTableName: 'produtos',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_produtos'],


                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("items_vendas", "foreignKeyVenda");
        await queryRunner.dropForeignKey("items_vendas", "foreignKeyPrduto");
        await queryRunner.dropTable('items_vendas')
    }
}
