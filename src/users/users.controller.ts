import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { CreateUserDto } from './dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(['ADMIN', 'SUPADMIN'])
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      city: user.city,
      country: user.country,
      email: user.email,
      EPS: user.EPS,
      name: user.name,
      phone_number: user.phone_number,
      role: user.role,
    };
  }

  @Get()
  @Roles(['ADMIN', 'SUPADMIN'])
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    return {
      city: user.city,
      country: user.country,
      email: user.email,
      EPS: user.EPS,
      name: user.name,
      phone_number: user.phone_number,
      role: user.role,
    };
  }

  @Patch(':id')
  @Roles(['ADMIN', 'SUPADMIN', 'USER'])
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPADMIN', 'USER'])
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
