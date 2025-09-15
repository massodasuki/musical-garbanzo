import { DataSource } from 'typeorm';

// Entities
import { User } from './users/entities/user.entity';
import { ProfileUser } from './users/entities/profile-user.entity';
import { CodeMaster } from './users/entities/code-master.entity';
import { Role } from './users/entities/role.entity';
import { Entities } from './users/entities/entities.entity';
import { ProfilePentadbirHartas } from './vessels/entities/profile-pentadbir-hartas.entity';
import { Vessels } from './vessels/entities/vessel.entity';
import { VesselInspection } from './shared/entities/vessel-inspection.entity';
import { LpiForm } from './lpi-form/entities/lpi-form.entity';
import { LpiFormImage } from './lpi-form/entities/lpi-form-image.entity';
import { EmpunyaVesel } from './shared/entities/embedded/empunya-vesel.entity';
import { Nakhoda } from './shared/entities/embedded/nakhoda.entity';
import { PenandaanVesel } from './shared/entities/embedded/penandaan-vesel.entity';
import { PukatTunda } from './shared/entities/embedded/pukat-tunda.entity';
import { ButiranVesel } from './shared/entities/embedded/butiran-vesel.entity';
import { ButiranEnjin } from './shared/entities/embedded/butiran-enjin.entity';
import { AlatKeselamatan } from './shared/entities/embedded/alat-keselamatan.entity';
import { PeralatanMenangkap } from './shared/entities/embedded/peralatan-menangkap.entity';
import { PeralatanTambahanUtama } from './shared/entities/embedded/peralatan-tambahan-utama.entity';
import { PeralatanTambahanTambahan } from './shared/entities/embedded/peralatan-tambahan-tambahan.entity';
import { KeadaanVesel } from './shared/entities/embedded/keadaan-vesel.entity';
import { Search } from './search/entities/search.entity';
import { DeviceRegistration } from './device-registration/entities/device-registration.entity';
import { Appointment } from './appointment/entities/appointment.entity';
import { Financial } from './financial/entities/financial.entity';
import { FishingActivity } from './fishing-activity/entities/fishing-activity.entity';
import { Pengkalan } from './pengkalan/entities/pengkalan.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'appLesen',
  password: process.env.DB_PASSWORD || 'lesen2024',
  database: process.env.DB_DATABASE || 'elesen2024_dev',
  synchronize: false,
  logging: true,
  entities: [
    User,
    ProfileUser,
    CodeMaster,
    Role,
    Entities,
    ProfilePentadbirHartas,
    Vessels,
    VesselInspection,
    LpiForm,
    LpiFormImage,
    EmpunyaVesel,
    Nakhoda,
    PenandaanVesel,
    PukatTunda,
    ButiranVesel,
    ButiranEnjin,
    AlatKeselamatan,
    PeralatanMenangkap,
    PeralatanTambahanUtama,
    PeralatanTambahanTambahan,
    KeadaanVesel,
    Search,
    DeviceRegistration,
    Appointment,
    Financial,
    FishingActivity,
    Pengkalan,
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
