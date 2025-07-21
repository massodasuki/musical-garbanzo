import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Entities
import { VesselInspection } from './shared/entities/vessel-inspection.entity';
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

// module import
import { LpiFormModule } from './lpi-form/lpi-form.module';


//Base 
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { User } from './users/entities/user.entity';
import { SearchModule } from './search/search.module';
import { ImageModule } from './image/image.module';
import { DeviceRegistrationModule } from './device-registration/device-registration.module';
import { Search } from './search/entities/search.entity';
import { DeviceRegistration } from './device-registration/entities/device-registration.entity';
import { PushNotificationModule } from './push-notification/push-notification.module';
import { DigitalIdModule } from './digital-id/digital-id.module';
import { VesselsModule } from './vessels/vessels.module';
import { Vessels } from './vessels/entities/vessel.entity';

// Extended
// import { PrPg01CModule } from './extended/pr-pg-01-c/pr-pg-01-c.module';
// import { PpKpv03BModule } from './extended/pp-kpv-03-b/pp-kpv-03-b.module';
// import { PpKpv04BModule } from './extended/pp-kpv-04-b/pp-kpv-04-b.module';
// import { PpPpv01AModule } from './extended/pp-ppv-01-a/pp-ppv-01-a.module';
// import { PpPpv01BModule } from './extended/pp-ppv-01-b/pp-ppv-01-b.module';
// import { PpPpv01CModule } from './extended/pp-ppv-01-c/pp-ppv-01-c.module';
// import { PpPpv01DModule } from './extended/pp-ppv-01-d/pp-ppv-01-d.module';
// import { PpPpv02AModule } from './extended/pp-ppv-02-a/pp-ppv-02-a.module';
// import { PpPpv02BModule } from './extended/pp-ppv-02-b/pp-ppv-02-b.module';
// import { PpPpv02CModule } from './extended/pp-ppv-02-c/pp-ppv-02-c.module';
// import { PpPpv02DModule } from './extended/pp-ppv-02-d/pp-ppv-02-d.module';
// import { PpPpv03AModule } from './extended/pp-ppv-03-a/pp-ppv-03-a.module';
// import { PpPpv03BModule } from './extended/pp-ppv-03-b/pp-ppv-03-b.module';
// import { PpPpv04AModule } from './extended/pp-ppv-04-a/pp-ppv-04-a.module';
// import { PpPpv04BModule } from './extended/pp-ppv-04-b/pp-ppv-04-b.module';
// import { PpPpv05AModule } from './extended/pp-ppv-05-a/pp-ppv-05-a.module';
// import { PpPpv05BModule } from './extended/pp-ppv-05-b/pp-ppv-05-b.module';
// import { PpPpv06AModule } from './extended/pp-ppv-06-a/pp-ppv-06-a.module';
// import { PpPpv06BModule } from './extended/pp-ppv-06-b/pp-ppv-06-b.module';
// import { PpPpv07Module } from './extended/pp-ppv-07/pp-ppv-07.module';
// import { PpPpv08AModule } from './extended/pp-ppv-08-a/pp-ppv-08-a.module';
// import { PpPpv08BModule } from './extended/pp-ppv-08-b/pp-ppv-08-b.module';
// import { PpPvp02AModule } from './extended/pp-pvp-02-a/pp-pvp-02-a.module';
// import { PpPvp02BModule } from './extended/pp-pvp-02-b/pp-pvp-02-b.module';
// import { PpPvp02CModule } from './extended/pp-pvp-02-c/pp-pvp-02-c.module';
// import { PpPvp02DModule } from './extended/pp-pvp-02-d/pp-pvp-02-d.module';
// import { PpPvp03AModule } from './extended/pp-pvp-03-a/pp-pvp-03-a.module';
// import { PpPvp03BModule } from './extended/pp-pvp-03-b/pp-pvp-03-b.module';
// import { PpUv01AModule } from './extended/pp-uv-01-a/pp-uv-01-a.module';
// import { PpUv01BModule } from './extended/pp-uv-01-b/pp-uv-01-b.module';
// import { PpUv01CModule } from './extended/pp-uv-01-c/pp-uv-01-c.module';
// import { PpPm01AModule } from './extended/pp-pm-01-a/pp-pm-01-a.module';
// import { PpPm01BModule } from './extended/pp-pm-01-b/pp-pm-01-b.module';
// import { PpPm01CModule } from './extended/pp-pm-01-c/pp-pm-01-c.module';
// import { PpPm02Module } from './extended/pp-pm-02/pp-pm-02.module';
// import { PpPm03Module } from './extended/pp-pm-03/pp-pm-03.module';
// import { PpPk01AModule } from './extended/pp-pk-01-a/pp-pk-01-a.module';
// import { PpPk01BModule } from './extended/pp-pk-01-b/pp-pk-01-b.module';
// import { PpPk01CModule } from './extended/pp-pk-01-c/pp-pk-01-c.module';
// import { PpGk01AModule } from './extended/pp-gk-01-a/pp-gk-01-a.module';
// import { PpGk01BModule } from './extended/pp-gk-01-b/pp-gk-01-b.module';
// import { PpGe01AModule } from './extended/pp-ge-01-a/pp-ge-01-a.module';
// import { PpGe01BModule } from './extended/pp-ge-01-b/pp-ge-01-b.module';
// import { PpGe01CModule } from './extended/pp-ge-01-c/pp-ge-01-c.module';
// import { PpGe01DModule } from './extended/pp-ge-01-d/pp-ge-01-d.module';
// import { PpTpu01AModule } from './extended/pp-tpu-01-a/pp-tpu-01-a.module';
// import { PpTpu01BModule } from './extended/pp-tpu-01-b/pp-tpu-01-b.module';
// import { PpTz01Module } from './extended/pp-tz-01/pp-tz-01.module';
// import { PpLvp02Module } from './extended/pp-lvp-02/pp-lvp-02.module';
// import { PpLvp03Module } from './extended/pp-lvp-03/pp-lvp-03.module';
// import { PpLvp05Module } from './extended/pp-lvp-05/pp-lvp-05.module';
// import { PpLvp06BModule } from './extended/pp-lvp-06-b/pp-lvp-06-b.module';
// import { PpLvp07Module } from './extended/pp-lvp-07/pp-lvp-07.module';
// import { PpLvp08Module } from './extended/pp-lvp-08/pp-lvp-08.module';
// import { PpLvp09Module } from './extended/pp-lvp-09/pp-lvp-09.module';
// import { PpMs02Module } from './extended/pp-ms-02/pp-ms-02.module';
// import { NdPp02Module } from './extended/nd-pp-02/nd-pp-02.module';
// import { NdPp03Module } from './extended/nd-pp-03/nd-pp-03.module';
// import { NdPp04Module } from './extended/nd-pp-04/nd-pp-04.module';
// import { NdPp05Module } from './extended/nd-pp-05/nd-pp-05.module';
// import { NdPp06Module } from './extended/nd-pp-06/nd-pp-06.module';
// import { NdPp07Module } from './extended/nd-pp-07/nd-pp-07.module';
// import { NdPp08Module } from './extended/nd-pp-08/nd-pp-08.module';
// import { NdPp09Module } from './extended/nd-pp-09/nd-pp-09.module';

import { ProfileUser } from './users/entities/profile-user.entity'; 
import { CodeMaster } from './users/entities/code-master.entity';
import { Role } from './users/entities/role.entity';


@Module({
  imports: [
  AuthModule, 
  UsersModule, 
  JwtModule,
  LpiFormModule,
  DeviceRegistrationModule,
  SearchModule,
  ImageModule,
  PushNotificationModule,
  DigitalIdModule,
  VesselsModule,

  ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,       // ⚠️ your database name
      // synchronize: true,          // ✅ auto create tables (turn off in prod)
      // logging: true,
      entities: [ User,
                  ProfileUser,
                  CodeMaster,
                  Role,
                  Vessels,
                  VesselInspection,
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
                  DeviceRegistration
                ]}),
  
  // PrPg01CModule,
  // PpKpv03BModule,
  // PpKpv04BModule,
  // PpPpv01AModule,
  // PpPpv01BModule,
  // PpPpv01CModule,
  // PpPpv01DModule,
  // PpPpv02AModule,
  // PpPpv02BModule,
  // PpPpv02CModule,
  // PpPpv02DModule,
  // PpPpv03AModule,
  // PpPpv03BModule,
  // PpPpv04AModule,
  // PpPpv04BModule,
  // PpPpv05AModule,
  // PpPpv05BModule,
  // PpPpv06AModule,
  // PpPpv06BModule,
  // PpPpv07Module,
  // PpPpv08AModule,
  // PpPpv08BModule,
  // PpPvp02AModule,
  // PpPvp02BModule,
  // PpPvp02CModule,
  // PpPvp02DModule,
  // PpPvp03AModule,
  // PpPvp03BModule,
  // PpUv01AModule,
  // PpUv01BModule,
  // PpUv01CModule,
  // PpPm01AModule,
  // PpPm01BModule,
  // PpPm01CModule,
  // PpPm02Module,
  // PpPm03Module,
  // PpPk01AModule,
  // PpPk01BModule,
  // PpPk01CModule,
  // PpGk01AModule,
  // PpGk01BModule,
  // PpGe01AModule,
  // PpGe01BModule,
  // PpGe01CModule,
  // PpGe01DModule,
  // PpTpu01AModule,
  // PpTpu01BModule,
  // PpTz01Module,
  // PpLvp02Module,
  // PpLvp03Module,
  // PpLvp05Module,
  // PpLvp06BModule,
  // PpLvp07Module,
  // PpLvp08Module,
  // PpLvp09Module,
  // PpMs02Module,
  // NdPp02Module,
  // NdPp03Module,
  // NdPp04Module,
  // NdPp05Module,
  // NdPp06Module,
  // NdPp07Module,
  // NdPp08Module,
  // NdPp09Module,
              ],
  controllers: [AppController],
  providers: [AppService, AuthService],
  
})

export class AppModule {}
