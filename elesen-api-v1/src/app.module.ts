import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Entities
import { VesselInspection } from './shared/entitites/vessel-inspection.entity';
import { EmpunyaVesel } from './shared/entitites/embedded/empunya-vesel.entity';
import { Nakhoda } from './shared/entitites/embedded/nakhoda.entity';
import { PenandaanVesel } from './shared/entitites/embedded/penandaan-vesel.entity';
import { PukatTunda } from './shared/entitites/embedded/pukat-tunda.entity';
import { ButiranVesel } from './shared/entitites/embedded/butiran-vesel.entity';
import { ButiranEnjin } from './shared/entitites/embedded/butiran-enjin.entity';
import { AlatKeselamatan } from './shared/entitites/embedded/alat-keselamatan.entity';
import { PeralatanMenangkap } from './shared/entitites/embedded/peralatan-menangkap.entity';
import { PeralatanTambahanUtama } from './shared/entitites/embedded/peralatan-tambahan-utama.entity';
import { PeralatanTambahanTambahan } from './shared/entitites/embedded/peralatan-tambahan-tambahan.entity';
import { KeadaanVesel } from './shared/entitites/embedded/keadaan-vesel.entity';

// module import
import { PrPg01CModule } from './pr-pg-01-c/pr-pg-01-c.module';
import { PpKpv03BModule } from './pp-kpv-03-b/pp-kpv-03-b.module';
import { PpKpv04BModule } from './pp-kpv-04-b/pp-kpv-04-b.module';
import { PpPpv01AModule } from './pp-ppv-01-a/pp-ppv-01-a.module';
import { PpPpv01BModule } from './pp-ppv-01-b/pp-ppv-01-b.module';
import { PpPpv01CModule } from './pp-ppv-01-c/pp-ppv-01-c.module';
import { PpPpv01DModule } from './pp-ppv-01-d/pp-ppv-01-d.module';
import { PpPpv02AModule } from './pp-ppv-02-a/pp-ppv-02-a.module';
import { PpPpv02BModule } from './pp-ppv-02-b/pp-ppv-02-b.module';
import { PpPpv02CModule } from './pp-ppv-02-c/pp-ppv-02-c.module';
import { PpPpv02DModule } from './pp-ppv-02-d/pp-ppv-02-d.module';
import { PpPpv03AModule } from './pp-ppv-03-a/pp-ppv-03-a.module';
import { PpPpv03BModule } from './pp-ppv-03-b/pp-ppv-03-b.module';
import { PpPpv04AModule } from './pp-ppv-04-a/pp-ppv-04-a.module';
import { PpPpv04BModule } from './pp-ppv-04-b/pp-ppv-04-b.module';
import { PpPpv05AModule } from './pp-ppv-05-a/pp-ppv-05-a.module';
import { PpPpv05BModule } from './pp-ppv-05-b/pp-ppv-05-b.module';
import { PpPpv06AModule } from './pp-ppv-06-a/pp-ppv-06-a.module';
import { PpPpv06BModule } from './pp-ppv-06-b/pp-ppv-06-b.module';
import { PpPpv07Module } from './pp-ppv-07/pp-ppv-07.module';
import { PpPpv08AModule } from './pp-ppv-08-a/pp-ppv-08-a.module';
import { PpPpv08BModule } from './pp-ppv-08-b/pp-ppv-08-b.module';
import { PpPvp02AModule } from './pp-pvp-02-a/pp-pvp-02-a.module';
import { PpPvp02BModule } from './pp-pvp-02-b/pp-pvp-02-b.module';
import { PpPvp02CModule } from './pp-pvp-02-c/pp-pvp-02-c.module';
import { PpPvp02DModule } from './pp-pvp-02-d/pp-pvp-02-d.module';
import { PpPvp03AModule } from './pp-pvp-03-a/pp-pvp-03-a.module';
import { PpPvp03BModule } from './pp-pvp-03-b/pp-pvp-03-b.module';
import { PpUv01AModule } from './pp-uv-01-a/pp-uv-01-a.module';
import { PpUv01BModule } from './pp-uv-01-b/pp-uv-01-b.module';
import { PpUv01CModule } from './pp-uv-01-c/pp-uv-01-c.module';
import { PpPm01AModule } from './pp-pm-01-a/pp-pm-01-a.module';
import { PpPm01BModule } from './pp-pm-01-b/pp-pm-01-b.module';
import { PpPm01CModule } from './pp-pm-01-c/pp-pm-01-c.module';
import { PpPm02Module } from './pp-pm-02/pp-pm-02.module';
import { PpPm03Module } from './pp-pm-03/pp-pm-03.module';
import { PpPk01AModule } from './pp-pk-01-a/pp-pk-01-a.module';
import { PpPk01BModule } from './pp-pk-01-b/pp-pk-01-b.module';
import { PpPk01CModule } from './pp-pk-01-c/pp-pk-01-c.module';
import { PpGk01AModule } from './pp-gk-01-a/pp-gk-01-a.module';
import { PpGk01BModule } from './pp-gk-01-b/pp-gk-01-b.module';
import { PpGe01AModule } from './pp-ge-01-a/pp-ge-01-a.module';
import { PpGe01BModule } from './pp-ge-01-b/pp-ge-01-b.module';
import { PpGe01CModule } from './pp-ge-01-c/pp-ge-01-c.module';
import { PpGe01DModule } from './pp-ge-01-d/pp-ge-01-d.module';
import { PpTpu01AModule } from './pp-tpu-01-a/pp-tpu-01-a.module';
import { PpTpu01BModule } from './pp-tpu-01-b/pp-tpu-01-b.module';
import { PpTz01AModule } from './pp-tz-01-a/pp-tz-01-a.module';
import { PpLvp02Module } from './pp-lvp-02/pp-lvp-02.module';
import { PpLvp03Module } from './pp-lvp-03/pp-lvp-03.module';
import { PpLvp05Module } from './pp-lvp-05/pp-lvp-05.module';
import { PpLvp06BModule } from './pp-lvp-06-b/pp-lvp-06-b.module';
import { PpLvp07Module } from './pp-lvp-07/pp-lvp-07.module';
import { PpLvp08Module } from './pp-lvp-08/pp-lvp-08.module';
import { PpLvp09Module } from './pp-lvp-09/pp-lvp-09.module';
import { PpMs02Module } from './pp-ms-02/pp-ms-02.module';
import { NdPp02Module } from './nd-pp-02/nd-pp-02.module';
import { NdPp03Module } from './nd-pp-03/nd-pp-03.module';
import { NdPp04Module } from './nd-pp-04/nd-pp-04.module';
import { NdPp05Module } from './nd-pp-05/nd-pp-05.module';
import { NdPp06Module } from './nd-pp-06/nd-pp-06.module';
import { NdPp07Module } from './nd-pp-07/nd-pp-07.module';
import { NdPp08Module } from './nd-pp-08/nd-pp-08.module';
import { NdPp09Module } from './nd-pp-09/nd-pp-09.module';

//Base 
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { User } from './users/entities/user.entity';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
  PrPg01CModule,
  PpKpv03BModule,
  PpKpv04BModule,
  PpPpv01AModule,
  PpPpv01BModule,
  PpPpv01CModule,
  PpPpv01DModule,
  PpPpv02AModule,
  PpPpv02BModule,
  PpPpv02CModule,
  PpPpv02DModule,
  PpPpv03AModule,
  PpPpv03BModule,
  PpPpv04AModule,
  PpPpv04BModule,
  PpPpv05AModule,
  PpPpv05BModule,
  PpPpv06AModule,
  PpPpv06BModule,
  PpPpv07Module,
  PpPpv08AModule,
  PpPpv08BModule,
  PpPvp02AModule,
  PpPvp02BModule,
  PpPvp02CModule,
  PpPvp02DModule,
  PpPvp03AModule,
  PpPvp03BModule,
  PpUv01AModule,
  PpUv01BModule,
  PpUv01CModule,
  PpPm01AModule,
  PpPm01BModule,
  PpPm01CModule,
  PpPm02Module,
  PpPm03Module,
  PpPk01AModule,
  PpPk01BModule,
  PpPk01CModule,
  PpGk01AModule,
  PpGk01BModule,
  PpGe01AModule,
  PpGe01BModule,
  PpGe01CModule,
  PpGe01DModule,
  PpTpu01AModule,
  PpTpu01BModule,
  PpTz01AModule,
  PpLvp02Module,
  PpLvp03Module,
  PpLvp05Module,
  PpLvp06BModule,
  PpLvp07Module,
  PpLvp08Module,
  PpLvp09Module,
  PpMs02Module,
  NdPp02Module,
  NdPp03Module,
  NdPp04Module,
  NdPp05Module,
  NdPp06Module,
  NdPp07Module,
  NdPp08Module,
  NdPp09Module,
  AuthModule, 
  UsersModule, 
  JwtModule,
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'appLesen',           // ⚠️ your MySQL username
      password: 'lesen2024',       // ⚠️ your MySQL password
      database: 'elesen2024',         // ⚠️ your database name
      synchronize: true,          // ✅ auto create tables (turn off in prod)
      // logging: true,
      entities: [ User,
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
                  SearchModule
                ]}),
  SearchModule
              ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})

export class AppModule {}
