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
import { CreateAdminsDto } from './dto';
import { AdminsService } from 'src/services/admins/admins.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('admins')
@UseGuards(AuthGuard, RolesGuard)
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @Roles(['ADMIN', 'SUPADMIN'])
  async create(@Body() createadminDto: CreateAdminsDto) {
    return await this.adminsService.create(createadminDto);
  }

  @Get()
  @Roles(['ADMIN', 'SUPADMIN'])
  async findAll() {
    return await this.adminsService.findAll();
  }

  @Get(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async findOne(@Param('id') id: string) {
    return await this.adminsService.findOne(id);
  }

  @Patch(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async update(
    @Param('id') id: string,
    @Body() updateAdminsDto: Partial<CreateAdminsDto>,
  ) {
    return await this.adminsService.update(id, updateAdminsDto);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async remove(@Param('id') id: string) {
    return await this.adminsService.remove(id);
  }
}
