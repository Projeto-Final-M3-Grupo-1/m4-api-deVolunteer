import { MigrationInterface, QueryRunner } from "typeorm";

export class allEntitys1673360796136 implements MigrationInterface {
    name = 'allEntitys1673360796136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "site" character varying NOT NULL, "img" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_9198b86c4c22bf6852c43f3b44e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_9198b86c4c22bf6852c43f3b44e"`);
        await queryRunner.query(`DROP TABLE "news"`);
    }

}
