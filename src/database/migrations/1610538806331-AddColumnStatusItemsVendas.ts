import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnStatusItemsVendas1610538806331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'items_vendas',
            new TableColumn({
                name: 'isAtivado',
                type: 'boolean',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('items_vendas', 'isAtivado');
    }
}
