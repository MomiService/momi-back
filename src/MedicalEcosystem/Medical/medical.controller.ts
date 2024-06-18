import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalsService } from '../../services/MedicalEcosystem/Medical/medicals.service';
import { CreateMedicalDto } from './dto';

@Controller('medicals')
export class MedicalsController {
  constructor(private readonly medicalsService: MedicalsService) {}

  @Post()
  async create(@Body() createMedicalDto: CreateMedicalDto) {
    return await this.medicalsService.create(createMedicalDto);
  }

  @Get()
  async findAll() {
    return await this.medicalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.medicalsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalDto: Partial<CreateMedicalDto>,
  ) {
    return await this.medicalsService.update(id, updateMedicalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.medicalsService.remove(id);
  }
}
