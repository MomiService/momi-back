import * as bcrypt from 'bcrypt';

export class EncryptService {
  static readonly saltOrRounds = 10;
  static async encrypt(text: string): Promise<string> {
    return await bcrypt.hash(text, this.saltOrRounds);
  }

  static async isMatch(text: string, textHash: string): Promise<boolean> {
    return await bcrypt.compare(text, textHash);
  }
}
