import { Module } from '@nestjs/common';
import { MedicalsController } from './medical.controller';
import { MedicalsService } from 'src/services/MedicalEcosystem/Medical/medicals.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Module({
  controllers: [MedicalsController],
  providers: [
    MedicalsService,
    AuthGuard,
    JwtService,
    ConfigService,
    RolesGuard,
  ],
})
export class MedicalModule {}
