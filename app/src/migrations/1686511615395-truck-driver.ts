import { MigrationInterface, QueryRunner } from 'typeorm';

export class TruckDriver1686511615395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "truck_driver" (
            "id" character varying(255) PRIMARY KEY,
            "name" character varying(255) NOT NULL
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
