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

@Module({
  imports: [
    UsersModule,
    AdminsModule,
    SupAdminsModule,
    MedicalModule,
    ServiceMedicalModule,
    SpecialityModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
