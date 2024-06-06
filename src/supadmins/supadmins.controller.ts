import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateSupAdminsDto } from './dto';

import { SupadminsService } from 'src/services/supadmins/supadmins.service';

@Controller('supadmins')
export class SupAdminsController {
  constructor(private readonly supadminsService: SupadminsService) {}

  @Post()
  async create(@Body() createsupadminDto: CreateSupAdminsDto) {
    return await this.supadminsService.create(createsupadminDto);
  }

  @Get()
  async findAll() {
    return await this.supadminsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.supadminsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSupAdminsDto: Partial<CreateSupAdminsDto>,
  ) {
    return await this.supadminsService.update(id, updateSupAdminsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.supadminsService.remove(id);
  }
}
