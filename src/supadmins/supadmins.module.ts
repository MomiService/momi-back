import { Module } from '@nestjs/common';
import { SupAdminsController } from './supadmins.controller';
import { SupadminsService } from 'src/services/supadmins/supadmins.service';

@Module({
  controllers: [SupAdminsController],
  providers: [SupadminsService],
})
export class SupAdminsModule {}
