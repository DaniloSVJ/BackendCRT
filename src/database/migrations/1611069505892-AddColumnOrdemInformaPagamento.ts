import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnOrdemInformaPagamento1611069505892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'forma_pagamento',
            new TableColumn({
                name: 'ordem',
                type: 'int',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('forma_pagamento', 'ordem');
    }

}
