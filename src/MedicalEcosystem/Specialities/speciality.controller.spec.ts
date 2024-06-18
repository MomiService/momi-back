import { Test, TestingModule } from '@nestjs/testing';
import { SpecialityController } from './speciality.controller';
import { SpecialityService } from '../../services/MedicalEcosystem/Specialities/specialities.service';

describe('SpecialityController', () => {
  let controller: SpecialityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialityController],
      providers: [SpecialityService],
    }).compile();

    controller = module.get<SpecialityController>(SpecialityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
