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
import { MedicalsService } from '../../services/MedicalEcosystem/Medical/medicals.service';
import { CreateMedicalDto } from './dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('medicals')
@UseGuards(AuthGuard, RolesGuard)
export class MedicalsController {
  constructor(private readonly medicalsService: MedicalsService) {}

  @Post()
  @Roles(['ADMIN', 'SUPADMIN', 'MEDICAL'])
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
  @Roles(['ADMIN', 'SUPADMIN', 'MEDICAL'])
  async update(
    @Param('id') id: string,
    @Body() updateMedicalDto: Partial<CreateMedicalDto>,
  ) {
    return await this.medicalsService.update(id, updateMedicalDto);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPADMIN', 'MEDICAL'])
  async remove(@Param('id') id: string) {
    return await this.medicalsService.remove(id);
  }
}
