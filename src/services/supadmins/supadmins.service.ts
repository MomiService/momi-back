import { Injectable } from '@nestjs/common';
import { CreateSupAdminsDto } from 'src/supadmins/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SupadminsService extends PrismaService {
  async create(createSupAdminsDto: CreateSupAdminsDto) {
    return await this.supAdmin.create({
      data: createSupAdminsDto,
    });
  }

  async findAll() {
    return await this.supAdmin.findMany();
  }

  async findOne(id: string) {
    return await this.supAdmin.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSupAdminDto: Partial<CreateSupAdminsDto>) {
    return await this.supAdmin.update({
      data: updateSupAdminDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.supAdmin.delete({
      where: {
        id,
      },
    });
  }
}
