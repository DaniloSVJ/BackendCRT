import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDadosParametros1610110256618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'items_vendas_acessoria',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: false
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
        await queryRunner.dropForeignKey("items_vendas", "foreignKeyPrduto");
        await queryRunner.dropTable('items_vendas')
    }

}
