import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

export class SeedDummyData1736502310564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Hash a default password
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminPassword = await bcrypt.hash('admin123', 10);

    // Generate UUIDs for consistency
    const userIds = [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
      '550e8400-e29b-41d4-a716-446655440003',
      '550e8400-e29b-41d4-a716-446655440004',
      '550e8400-e29b-41d4-a716-446655440005'
    ];

    const roleIds = [
      '660e8400-e29b-41d4-a716-446655440001',
      '660e8400-e29b-41d4-a716-446655440002',
      '660e8400-e29b-41d4-a716-446655440003'
    ];

    const entityIds = [
      '770e8400-e29b-41d4-a716-446655440001',
      '770e8400-e29b-41d4-a716-446655440002'
    ];

    // Insert dummy entities
    await queryRunner.query(`
      INSERT INTO entities (id, entity_name, entity_level, is_active, state_code, created_at, updated_at) VALUES
      ('${entityIds[0]}', 'Department of Fisheries Penang', 1, true, 'PN', NOW(), NOW()),
      ('${entityIds[1]}', 'Marine Enforcement Agency KL', 1, true, 'KL', NOW(), NOW())
    `);

    // Insert dummy roles
    await queryRunner.query(`
      INSERT INTO roles (id, name, is_active, created_at, updated_at, level, quota) VALUES
      ('${roleIds[0]}', 'Admin', true, NOW(), NOW(), 1, 10),
      ('${roleIds[1]}', 'Inspector', true, NOW(), NOW(), 2, 5),
      ('${roleIds[2]}', 'Fisherman', true, NOW(), NOW(), 3, 100)
    `);

    // Insert dummy users
    await queryRunner.query(`
      INSERT INTO users (id, name, username, email, password, is_active, is_admin, user_type, entity_id, created_at, updated_at, address1, postcode, district, state_id, contact_number) VALUES
      ('${userIds[0]}', 'Ahmad bin Abdullah', 'ahmad_admin', 'ahmad@example.com', '${adminPassword}', true, true, 1, '${entityIds[0]}', NOW(), NOW(), 'Jalan Sultan Ahmad Shah', '10050', 'Georgetown', 'PN', '0123456789'),
      ('${userIds[1]}', 'Siti binti Hassan', 'siti_inspector', 'siti@example.com', '${hashedPassword}', true, false, 2, '${entityIds[0]}', NOW(), NOW(), 'Lebuh Campbell', '10200', 'Georgetown', 'PN', '0134567890'),
      ('${userIds[2]}', 'Mohd bin Ismail', 'mohd_fisher', 'mohd@example.com', '${hashedPassword}', true, false, 3, '${entityIds[1]}', NOW(), NOW(), 'Jalan Tun Razak', '50400', 'Kuala Lumpur', 'KL', '0145678901'),
      ('${userIds[3]}', 'Fatimah binti Yusof', 'fatimah_admin', 'fatimah@example.com', '${adminPassword}', true, true, 1, '${entityIds[1]}', NOW(), NOW(), 'Jalan Ampang', '50450', 'Kuala Lumpur', 'KL', '0156789012'),
      ('${userIds[4]}', 'Ali bin Rahman', 'ali_inspector', 'ali@example.com', '${hashedPassword}', true, false, 2, '${entityIds[1]}', NOW(), NOW(), 'Jalan Bukit Bintang', '55100', 'Kuala Lumpur', 'KL', '0167890123')
    `);

    // Insert user-role relations
    await queryRunner.query(`
      INSERT INTO user_role (user_id, role_id) VALUES
      ('${userIds[0]}', '${roleIds[0]}'),
      ('${userIds[1]}', '${roleIds[1]}'),
      ('${userIds[2]}', '${roleIds[2]}'),
      ('${userIds[3]}', '${roleIds[0]}'),
      ('${userIds[4]}', '${roleIds[1]}')
    `);

    // Insert dummy vessels
    const vesselIds = [
      '880e8400-e29b-41d4-a716-446655440001',
      '880e8400-e29b-41d4-a716-446655440002',
      '880e8400-e29b-41d4-a716-446655440003'
    ];

    await queryRunner.query(`
      INSERT INTO vessels (id, entity_id, vessel_no, zone, is_active, created_at, start_date, end_date) VALUES
      ('${vesselIds[0]}', '${entityIds[0]}', 'PV001', 'Zone A', true, NOW(), '2024-01-01', '2025-12-31'),
      ('${vesselIds[1]}', '${entityIds[0]}', 'PV002', 'Zone B', true, NOW(), '2024-02-01', '2025-12-31'),
      ('${vesselIds[2]}', '${entityIds[1]}', 'PV003', 'Zone C', true, NOW(), '2024-03-01', '2025-12-31')
    `);

    // Insert dummy appointments
    const appointmentIds = [
      '990e8400-e29b-41d4-a716-446655440001',
      '990e8400-e29b-41d4-a716-446655440002'
    ];

    await queryRunner.query(`
      INSERT INTO appointment (id, vessel_id, tarikh_pemeriksaan, status, penyediaan_laporan) VALUES
      ('${appointmentIds[0]}', '${vesselIds[0]}', '2024-10-15', 'Dijadualkan', 'Dalam Semakan'),
      ('${appointmentIds[1]}', '${vesselIds[1]}', '2024-11-20', 'Selesai', 'Disokong')
    `);

    // Insert dummy vessel inspections
    const inspectionIds = [1, 2];

    await queryRunner.query(`
      INSERT INTO pemeriksaan_vessels (id, jenis_borang, vessel_no, pangkalan) VALUES
      (${inspectionIds[0]}, 'pp-ppv-01-a', 'PV001', 'Penang Port'),
      (${inspectionIds[1]}, 'pp-ppv-01-b', 'PV002', 'Kuala Lumpur Port')
    `);

    // Insert embedded entities for vessel inspections
    await queryRunner.query(`
      INSERT INTO empunya_vessels (id, nama, ic, pemeriksaan_vessels_id) VALUES
      (UUID(), 'Ahmad bin Abdullah', '850101-01-1234', ${inspectionIds[0]}),
      (UUID(), 'Siti binti Hassan', '860202-02-5678', ${inspectionIds[1]})
    `);

    await queryRunner.query(`
      INSERT INTO nakhoda (id, nama, ic, pemeriksaan_vessels_id) VALUES
      (UUID(), 'Mohd bin Ismail', '800303-03-9012', ${inspectionIds[0]}),
      (UUID(), 'Fatimah binti Yusof', '810404-04-3456', ${inspectionIds[1]})
    `);

    await queryRunner.query(`
      INSERT INTO butiran_vessels (id, panjang, lebar, dalam, muatan_grt, pemeriksaan_vessels_id) VALUES
      (UUID(), 25.50, 6.20, 3.10, 45.75, ${inspectionIds[0]}),
      (UUID(), 30.00, 7.50, 3.80, 62.30, ${inspectionIds[1]})
    `);

    await queryRunner.query(`
      INSERT INTO penandaan_vessels (id, ditebuk, dicat_terang, di_bumbung, penukul_besi, kod_penukul, tin_plate, paku_penanda, rumah_kemudi_dicat, kod_zon, mppl, di_bumbung_rumah, pemeriksaan_vessels_id) VALUES
      (UUID(), true, true, true, true, 'ABC123', true, true, true, 'A1', true, true, ${inspectionIds[0]}),
      (UUID(), true, false, true, false, NULL, false, true, true, 'B2', false, false, ${inspectionIds[1]})
    `);

    // Insert dummy LPI forms
    const lpiFormIds = [
      'aa0e8400-e29b-41d4-a716-446655440001',
      'aa0e8400-e29b-41d4-a716-446655440002'
    ];

    await queryRunner.query(`
      INSERT INTO lpi_forms (id, user, createdAt) VALUES
      ('${lpiFormIds[0]}', '${userIds[1]}', NOW()),
      ('${lpiFormIds[1]}', '${userIds[4]}', NOW())
    `);

    // Link LPI forms to vessel inspections
    await queryRunner.query(`
      UPDATE pemeriksaan_vessels SET lpi_form_id = '${lpiFormIds[0]}' WHERE id = ${inspectionIds[0]}
    `);
    await queryRunner.query(`
      UPDATE pemeriksaan_vessels SET lpi_form_id = '${lpiFormIds[1]}' WHERE id = ${inspectionIds[1]}
    `);

    // Insert dummy financial data
    await queryRunner.query(`
      INSERT INTO financial (id, user_id, bank_name, branch, account_no, bantuan_elaun_sara_hidup, bantuan, kwsp, pencen) VALUES
      (UUID(), '${userIds[0]}', 'Maybank', 'Penang Main', '123456789012', true, false, true, false),
      (UUID(), '${userIds[1]}', 'CIMB Bank', 'Georgetown', '234567890123', false, true, true, false),
      (UUID(), '${userIds[2]}', 'Bank Islam', 'KLCC', '345678901234', true, true, false, true),
      (UUID(), '${userIds[3]}', 'Public Bank', 'Ampang', '456789012345', false, false, true, true),
      (UUID(), '${userIds[4]}', 'RHB Bank', 'Bukit Bintang', '567890123456', true, false, false, false)
    `);

    // Insert dummy device registrations (simplified without user relation)
    await queryRunner.query(`
      INSERT INTO device_registration (id, fcm_token, device_name, os, created_at) VALUES
      (UUID(), 'device_token_123', 'Samsung Galaxy', 'Android', NOW()),
      (UUID(), 'device_token_456', 'iPhone 12', 'iOS', NOW()),
      (UUID(), 'device_token_789', 'OnePlus', 'Android', NOW())
    `);

    // Insert dummy fishing activities
    await queryRunner.query(`
      INSERT INTO fishing_activity (id, user_id, is_main_income, fishing_location, first_registered_year, fishing_days_per_month, fishing_days_per_season, season_length, annual_income_estimate, monthly_income_estimate) VALUES
      (UUID(), '${userIds[2]}', true, 'South China Sea', 2015, 20, 180, 9, 150000.00, 12500.00),
      (UUID(), '${userIds[2]}', false, 'Strait of Malacca', 2018, 15, 120, 8, 90000.00, 7500.00)
    `);

    // Insert dummy pengkalan (fishing bases)
    await queryRunner.query(`
      INSERT INTO pengkalan (id, user_id, name, district, state, location, license_no, license_expiry, main_equipment, additional_equipment) VALUES
      (UUID(), '${userIds[2]}', 'Penang Fishing Base', 'Georgetown', 'Penang', 'Jeti Penang', 'PK001', '2025-12-31', 'Trawl Net', 'GPS System'),
      (UUID(), '${userIds[2]}', 'KL Fishing Hub', 'Kuala Lumpur', 'Kuala Lumpur', 'Port Klang', 'PK002', '2025-11-30', 'Longline', 'Fish Finder')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove dummy data in reverse order to avoid foreign key constraints
    await queryRunner.query(`DELETE FROM pengkalan WHERE user_id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM fishing_activity WHERE user_id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM device_registration WHERE user_id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM financial WHERE user_id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM lpi_form_images WHERE lpi_form_id IN ('aa0e8400-e29b-41d4-a716-446655440001', 'aa0e8400-e29b-41d4-a716-446655440002')`);
    await queryRunner.query(`DELETE FROM lpi_forms WHERE id IN ('aa0e8400-e29b-41d4-a716-446655440001', 'aa0e8400-e29b-41d4-a716-446655440002')`);
    await queryRunner.query(`DELETE FROM penandaan_vessels WHERE pemeriksaan_vessels_id IN (1, 2)`);
    await queryRunner.query(`DELETE FROM butiran_vessels WHERE pemeriksaan_vessels_id IN (1, 2)`);
    await queryRunner.query(`DELETE FROM nakhoda WHERE pemeriksaan_vessels_id IN (1, 2)`);
    await queryRunner.query(`DELETE FROM empunya_vessels WHERE pemeriksaan_vessels_id IN (1, 2)`);
    await queryRunner.query(`DELETE FROM pemeriksaan_vessels WHERE id IN (1, 2)`);
    await queryRunner.query(`DELETE FROM appointment WHERE id IN ('990e8400-e29b-41d4-a716-446655440001', '990e8400-e29b-41d4-a716-446655440002')`);
    await queryRunner.query(`DELETE FROM vessels WHERE id IN ('880e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440003')`);
    await queryRunner.query(`DELETE FROM user_role WHERE user_id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM users WHERE id IN ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005')`);
    await queryRunner.query(`DELETE FROM roles WHERE id IN ('660e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440003')`);
    await queryRunner.query(`DELETE FROM entities WHERE id IN ('770e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440002')`);
  }
}