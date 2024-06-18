import { Module } from '@nestjs/common';
import { ServiceMedicalService } from '../../services/MedicalEcosystem/ServiceMedical/servicemedical.service';
import { ServiceMedicalController } from './servicemedical.controller';

@Module({
  controllers: [ServiceMedicalController],
  providers: [ServiceMedicalService],
})
export class ServiceMedicalModule {}
