import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceMedicalService } from '../../services/MedicalEcosystem/ServiceMedical/servicemedical.service';
import { CreateServiceMedicalDto } from './dto';

@Controller('servicemedical')
export class ServiceMedicalController {
  constructor(private readonly serviceMedicalService: ServiceMedicalService) {}

  @Post()
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
  async update(
    @Param('id') id: string,
    @Body() updateServiceMedicalDto: Partial<CreateServiceMedicalDto>,
  ) {
    return await this.serviceMedicalService.update(id, updateServiceMedicalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.serviceMedicalService.remove(id);
  }
}
