import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddisActiveColumnItemsVenda1610639954815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'clients',
            new TableColumn({
                name: 'isAtivado',
                type: 'boolean',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clients', 'isAtivado');
    }

}
