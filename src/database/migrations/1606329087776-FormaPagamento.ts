import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class FormaPagamento1606147649112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'forma_pagamento',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary:true,
                        isGenerated: true

                    },
                    {
                        name:'nome',
                        type: 'varchar'
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

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('forma_pagamento');
    }

}
