import { Module } from '@nestjs/common';
import { AdminsService } from '../services/admins/admins.service';
import { AdminsController } from './admins.controller';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, AuthGuard, JwtService, ConfigService, RolesGuard],
})
export class AdminsModule {}
