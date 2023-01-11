import { MigrationInterface, QueryRunner } from "typeorm";

export class datesNewsEntity1673399516018 implements MigrationInterface {
    name = 'datesNewsEntity1673399516018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "news" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "news" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "news" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "news" DROP COLUMN "createdAt"`);
    }

}
