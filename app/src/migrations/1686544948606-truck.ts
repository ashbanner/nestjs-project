import { MigrationInterface, QueryRunner } from 'typeorm';

export class Truck1686544948606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "truck" (
            "id" character varying(255) PRIMARY KEY,
            "isElectric" boolean NOT NULL,
            "isCompanyOwned" boolean NOT NULL
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
