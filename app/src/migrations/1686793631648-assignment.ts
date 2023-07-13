import { MigrationInterface, QueryRunner } from 'typeorm';

export class Assignment1686793631648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "assignment" (
            "id" character varying(255) PRIMARY KEY,
            "scheduleId" character varying(255) NOT NULL,
            "truckDriverId" character varying(255) NOT NULL
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
