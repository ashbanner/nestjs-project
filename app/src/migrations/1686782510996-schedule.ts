import { MigrationInterface, QueryRunner } from 'typeorm';

export class Schedule1686782510996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "schedule" (
            "id" character varying(255) PRIMARY KEY
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
