import { Module } from '@nestjs/common';
import { SpecialityService } from '../../services/MedicalEcosystem/Specialities/specialities.service';
import { SpecialityController } from './speciality.controller';

@Module({
  controllers: [SpecialityController],
  providers: [SpecialityService],
})
export class SpecialityModule {}
