import { Injectable } from '@nestjs/common';
import { CreateServiceMedicalDto } from '../../../MedicalEcosystem/ServiceMedical/dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ServiceMedicalService extends PrismaService {
  async create(createServiceMedicalDto: CreateServiceMedicalDto) {
    return await this.service.create({
      data: createServiceMedicalDto,
    });
  }

  async findAll() {
    return await this.service.findMany();
  }

  async findOne(id: string) {
    return await this.service.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateServiceMedicalDto: Partial<CreateServiceMedicalDto>,
  ) {
    return await this.service.update({
      data: updateServiceMedicalDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.service.delete({
      where: {
        id,
      },
    });
  }
}
