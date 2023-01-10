import { MigrationInterface, QueryRunner } from "typeorm";

export class allEntitys1673358130055 implements MigrationInterface {
    name = 'allEntitys1673358130055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_to_technologies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "technologiesId" uuid, "userId" uuid, CONSTRAINT "PK_59a92abcbbd82edc0ff53354fdf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_to_technologies" ADD CONSTRAINT "FK_2b112816e123dc05c2feb3fc5c0" FOREIGN KEY ("technologiesId") REFERENCES "technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_to_technologies" ADD CONSTRAINT "FK_7aab906fcd19399654d7f7bfdb9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_to_technologies" DROP CONSTRAINT "FK_7aab906fcd19399654d7f7bfdb9"`);
        await queryRunner.query(`ALTER TABLE "users_to_technologies" DROP CONSTRAINT "FK_2b112816e123dc05c2feb3fc5c0"`);
        await queryRunner.query(`DROP TABLE "users_to_technologies"`);
    }

}
