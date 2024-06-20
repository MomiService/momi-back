import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto, singUpDto } from './dto';

import { AuthService } from 'src/services/auths/auths.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }
  @Post('singup')
  async singup(@Body() data: singUpDto) {
    const sin = await this.authService.singup(data);
    if (!sin) {
      throw new InternalServerErrorException();
    }
    return {
      message: 'User Create Susseccfull',
    };
  }
}
