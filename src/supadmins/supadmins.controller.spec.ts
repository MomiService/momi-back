import { Test, TestingModule } from '@nestjs/testing';
import { SupAdminsController } from './supadmins.controller';
import { SupadminsService } from 'src/services/supadmins/supadmins.service';

describe('SupAdminsController', () => {
  let controller: SupAdminsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupAdminsController],
      providers: [SupadminsService],
    }).compile();

    controller = module.get<SupAdminsController>(SupAdminsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
