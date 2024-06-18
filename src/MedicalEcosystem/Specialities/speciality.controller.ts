import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecialityService } from '../../services/MedicalEcosystem/Specialities/specialities.service';
import { CreateSpecialtyDto } from './dto';

@Controller('specialities')
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) {}

  @Post()
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
  async update(
    @Param('id') id: string,
    @Body() updateSpecialityDto: Partial<CreateSpecialtyDto>,
  ) {
    return await this.specialityService.update(id, updateSpecialityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.specialityService.remove(id);
  }
}
