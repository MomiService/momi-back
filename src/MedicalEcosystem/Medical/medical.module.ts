import { Module } from '@nestjs/common';
import { MedicalsController } from './medical.controller';
import { MedicalsService } from 'src/services/MedicalEcosystem/Medical/medicals.service';

@Module({
  controllers: [MedicalsController],
  providers: [MedicalsService],
})
export class MedicalModule {}
