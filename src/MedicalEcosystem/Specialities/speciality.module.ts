import { Module } from '@nestjs/common';
import { SpecialityService } from '../../services/MedicalEcosystem/Specialities/specialities.service';
import { SpecialityController } from './speciality.controller';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Module({
  controllers: [SpecialityController],
  providers: [
    SpecialityService,
    AuthGuard,
    JwtService,
    ConfigService,
    RolesGuard,
  ],
})
export class SpecialityModule {}
