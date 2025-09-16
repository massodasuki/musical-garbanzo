import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTypeORMMigrationsTable1736502310560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Check if the typeorm_migrations table exists
    const tableExists = await queryRunner.query(`
      SELECT TABLE_NAME
      FROM INFORMATION_SCHEMA.TABLES
      WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'typeorm_migrations'
    `);

    if (tableExists.length === 0) {
      // Create the TypeORM migrations table
      await queryRunner.query(`
        CREATE TABLE typeorm_migrations (
          id INT AUTO_INCREMENT PRIMARY KEY,
          timestamp BIGINT NOT NULL,
          name VARCHAR(255) NOT NULL
        )
      `);
    }

    // Update data-source.ts configuration (this would need to be done manually)
    // Add: migrationsTableName: 'typeorm_migrations'
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Optionally drop the table if needed
    await queryRunner.query(`DROP TABLE IF EXISTS typeorm_migrations`);
  }
}