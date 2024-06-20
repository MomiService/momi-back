import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, singUpDto } from 'src/auth/dto';
import { UsersService } from '../users/users.service';
import { inject } from 'src/utils';
import { Hash } from 'src/utils/HashStrategy';
import { TokenService } from '../token/token.service';
import { UserPrefab } from 'src/users/dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService extends PrismaService {
  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
  ) {
    super();
  }
  async login(data: LoginDto): Promise<{ access_token: string } | null> {
    const user = await this.userService.findOneByEmail(data.email);
    if (user === null || user === undefined) {
      return null;
    }
    const hash = inject(Hash);
    const comparade = await hash.comparate(data.password, user.password);
    if (!comparade) {
      return null;
    }

    return { access_token: await this.tokenService.login(user.id, user.role) };
  }

  async singup(data: singUpDto): Promise<User> {
    const hash = inject(Hash);
    return await this.userService.create({
      ...UserPrefab,
      ...data.data,
      password: await hash.encrypting(data.data.password),
    });
  }
}
