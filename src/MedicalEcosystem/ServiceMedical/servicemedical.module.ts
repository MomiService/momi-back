import { Module } from '@nestjs/common';
import { ServiceMedicalService } from '../../services/MedicalEcosystem/ServiceMedical/servicemedical.service';
import { ServiceMedicalController } from './servicemedical.controller';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Module({
  controllers: [ServiceMedicalController],
  providers: [
    ServiceMedicalService,
    AuthGuard,
    JwtService,
    ConfigService,
    RolesGuard,
  ],
})
export class ServiceMedicalModule {}
