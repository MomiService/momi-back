import { Module } from '@nestjs/common';
import { AdminsService } from '../services/admins/admins.service';
import { AdminsController } from './admins.controller';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
