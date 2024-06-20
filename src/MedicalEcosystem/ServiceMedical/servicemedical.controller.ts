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
import { ServiceMedicalService } from '../../services/MedicalEcosystem/ServiceMedical/servicemedical.service';
import { CreateServiceMedicalDto } from './dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('servicemedicals')
@UseGuards(AuthGuard, RolesGuard)
export class ServiceMedicalController {
  constructor(private readonly serviceMedicalService: ServiceMedicalService) {}

  @Post()
  @Roles(['ADMIN', 'SUPADMIN'])
  async create(@Body() createServiceMedicalDto: CreateServiceMedicalDto) {
    return await this.serviceMedicalService.create(createServiceMedicalDto);
  }

  @Get()
  async findAll() {
    return await this.serviceMedicalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.serviceMedicalService.findOne(id);
  }

  @Patch(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async update(
    @Param('id') id: string,
    @Body() updateServiceMedicalDto: Partial<CreateServiceMedicalDto>,
  ) {
    return await this.serviceMedicalService.update(id, updateServiceMedicalDto);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async remove(@Param('id') id: string) {
    return await this.serviceMedicalService.remove(id);
  }
}
