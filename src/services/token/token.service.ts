import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface Payload {
  id: string;
  role: string;
}

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}
  async login(id: string, role: string): Promise<string> {
    const payload: Payload = { id, role };
    return await this.jwtService.signAsync(payload);
  }
}
