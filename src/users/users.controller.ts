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
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(['ADMIN', 'SUPADMIN'])
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
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
