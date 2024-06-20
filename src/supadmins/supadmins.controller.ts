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
import { CreateSupAdminsDto } from './dto';

import { SupadminsService } from 'src/services/supadmins/supadmins.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('supadmins')
@UseGuards(AuthGuard, RolesGuard)
export class SupAdminsController {
  constructor(private readonly supadminsService: SupadminsService) {}

  @Post()
  @Roles(['SUPADMIN'])
  async create(@Body() createsupadminDto: CreateSupAdminsDto) {
    return await this.supadminsService.create(createsupadminDto);
  }

  @Get()
  @Roles(['SUPADMIN'])
  async findAll() {
    return await this.supadminsService.findAll();
  }

  @Get(':id')
  @Roles(['SUPADMIN'])
  async findOne(@Param('id') id: string) {
    return await this.supadminsService.findOne(id);
  }

  @Patch(':id')
  @Roles(['SUPADMIN'])
  async update(
    @Param('id') id: string,
    @Body() updateSupAdminsDto: Partial<CreateSupAdminsDto>,
  ) {
    return await this.supadminsService.update(id, updateSupAdminsDto);
  }

  @Delete(':id')
  @Roles(['SUPADMIN'])
  async remove(@Param('id') id: string) {
    return await this.supadminsService.remove(id);
  }
}
