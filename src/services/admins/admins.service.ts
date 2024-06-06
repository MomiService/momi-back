import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminsDto } from '../../admins/dto';

@Injectable()
export class AdminsService extends PrismaService {
  async create(createAdminDto: CreateAdminsDto) {
    return await this.admin.create({
      data: createAdminDto,
    });
  }

  async findAll() {
    return await this.admin.findMany();
  }

  async findOne(id: string) {
    return await this.admin.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateAdminDto: Partial<CreateAdminsDto>) {
    return await this.admin.update({
      data: updateAdminDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.admin.delete({
      where: {
        id,
      },
    });
  }
}
