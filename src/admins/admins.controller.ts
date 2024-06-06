import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAdminsDto } from './dto';
import { AdminsService } from 'src/services/admins/admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async create(@Body() createadminDto: CreateAdminsDto) {
    return await this.adminsService.create(createadminDto);
  }

  @Get()
  async findAll() {
    return await this.adminsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.adminsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminsDto: Partial<CreateAdminsDto>,
  ) {
    return await this.adminsService.update(id, updateAdminsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.adminsService.remove(id);
  }
}
