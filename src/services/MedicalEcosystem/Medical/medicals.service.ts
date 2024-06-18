import { Injectable } from '@nestjs/common';
import { CreateMedicalDto } from '../../../MedicalEcosystem/Medical/dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MedicalsService extends PrismaService {
  async create(createMedicalDto: CreateMedicalDto) {
    return await this.medical.create({
      data: createMedicalDto,
    });
  }

  async findAll() {
    return await this.medical.findMany();
  }

  async findOne(id: string) {
    return await this.medical.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateMedicalDto: Partial<CreateMedicalDto>) {
    return await this.medical.update({
      data: updateMedicalDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.medical.delete({
      where: {
        id,
      },
    });
  }
}
