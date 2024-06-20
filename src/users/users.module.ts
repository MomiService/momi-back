import { Module } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { UsersController } from './users.controller';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthGuard, JwtService, ConfigService, RolesGuard],
})
export class UsersModule {}
