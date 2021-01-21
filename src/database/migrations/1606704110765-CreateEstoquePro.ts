import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstoquePro1606704110765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'estoque',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                    },
                    {
                        name: 'quantidade',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
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
                        name: 'foreignKeygrup',
                        referencedTableName: 'produtos',
                        referencedColumnNames: ['id'],
                        columnNames: ['id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },



                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('estoque', 'foreignKeygrup')
        await queryRunner.dropTable('estoque')
    }

}
