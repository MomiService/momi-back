import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { SupAdminsModule } from './supadmins/supadmins.module';
import {
  MedicalModule,
  ServiceMedicalModule,
  SpecialityModule,
} from './MedicalEcosystem';
import { AuthModule } from './auth/auths.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/enviroments';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AdminsModule,
    SupAdminsModule,
    MedicalModule,
    ServiceMedicalModule,
    SpecialityModule,
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que el ConfigModule esté disponible globalmente
      envFilePath: '.env', // Especifica el archivo .env que deseas cargar
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
