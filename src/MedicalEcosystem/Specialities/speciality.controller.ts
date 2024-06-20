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
import { SpecialityService } from '../../services/MedicalEcosystem/Specialities/specialities.service';
import { CreateSpecialtyDto } from './dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';

@Controller('specialities')
@UseGuards(AuthGuard, RolesGuard)
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) {}

  @Post()
  @Roles(['ADMIN', 'SUPADMIN'])
  async create(@Body() createSpecialityDto: CreateSpecialtyDto) {
    return await this.specialityService.create(createSpecialityDto);
  }

  @Get()
  async findAll() {
    return await this.specialityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.specialityService.findOne(id);
  }

  @Patch(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async update(
    @Param('id') id: string,
    @Body() updateSpecialityDto: Partial<CreateSpecialtyDto>,
  ) {
    return await this.specialityService.update(id, updateSpecialityDto);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPADMIN'])
  async remove(@Param('id') id: string) {
    return await this.specialityService.remove(id);
  }
}
