import { Module } from '@nestjs/common';
import { SupAdminsController } from './supadmins.controller';
import { SupadminsService } from 'src/services/supadmins/supadmins.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Module({
  controllers: [SupAdminsController],
  providers: [
    SupadminsService,
    AuthGuard,
    JwtService,
    ConfigService,
    RolesGuard,
  ],
})
export class SupAdminsModule {}
