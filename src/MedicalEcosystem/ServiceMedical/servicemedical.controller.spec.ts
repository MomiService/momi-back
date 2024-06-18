import { Test, TestingModule } from '@nestjs/testing';
import { ServiceMedicalController } from './servicemedical.controller';
import { ServiceMedicalService } from '../../services/MedicalEcosystem/ServiceMedical/servicemedical.service';

describe('ServiceMedicalController', () => {
  let controller: ServiceMedicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceMedicalController],
      providers: [ServiceMedicalService],
    }).compile();

    controller = module.get<ServiceMedicalController>(ServiceMedicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
