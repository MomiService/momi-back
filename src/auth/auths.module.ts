import { Module } from '@nestjs/common';
import { AuthController } from './auths.controller';
import { AuthService } from 'src/services/auths/auths.service';
import { UsersService } from 'src/services/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService } from 'src/services/token/token.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('token.jsonSecret'),
        signOptions: {
          expiresIn: configService.get<string>('token.jsonExpiresIn'),
        },
        global: true, // Hacerlo global si es necesario
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, TokenService],
})
export class AuthModule {}
