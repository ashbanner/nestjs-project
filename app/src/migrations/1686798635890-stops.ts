import { MigrationInterface, QueryRunner } from 'typeorm';

export class Stop1686798635890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "stop" (
            "id" character varying(255) PRIMARY KEY,
            "assignmentId" character varying(255) NOT NULL,
            "address" character varying(255) NOT NULL
        );
        `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
