import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnsProduto1611249184946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'estoqueMin',
                type: 'int',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'estoqueMax',
                type: 'int',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'embalagem',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'quantidade',
                type: 'int',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'descricaoR',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'descricaoGeral',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('produtos', 'estoqueMin');
        await queryRunner.dropColumn('produtos', 'estoqueMax');
        await queryRunner.dropColumn('produtos', 'embalagem');
        await queryRunner.dropColumn('produtos', 'quantidade');
        await queryRunner.dropColumn('produtos', 'descricaoR');
        await queryRunner.dropColumn('produtos', 'descricaoGeral');
    }

}
