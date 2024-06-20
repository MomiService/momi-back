import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../users/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService extends PrismaService {
  async create(createUserDto: CreateUserDto) {
    return await this.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.user.findMany();
  }

  async findOne(id: string) {
    return await this.user.findFirst({
      where: {
        id,
      },
    });
  }

  async findOneByEmail(email: string) {
    return await this.user.findFirst({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserDto: Partial<CreateUserDto>) {
    return await this.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.user.delete({
      where: {
        id,
      },
    });
  }
}
