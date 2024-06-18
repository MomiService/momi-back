import { Injectable } from '@nestjs/common';
import { CreateSpecialtyDto } from '../../../MedicalEcosystem/Specialities/dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SpecialityService extends PrismaService {
  async create(createSpecialityDto: CreateSpecialtyDto) {
    return await this.specialty.create({
      data: createSpecialityDto,
    });
  }

  async findAll() {
    return await this.specialty.findMany();
  }

  async findOne(id: string) {
    return await this.specialty.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSpecialityDto: Partial<CreateSpecialtyDto>) {
    return await this.specialty.update({
      data: updateSpecialityDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.specialty.delete({
      where: {
        id,
      },
    });
  }
}
