import * as bycript from 'bcryptjs';

export interface IHash {
  encrypting(text: string): Promise<string>;
  comparate(text1: string, text2: string): Promise<boolean>;
}

export class Hash implements IHash {
  private saltRounds = 10;
  async encrypting(text: string): Promise<string> {
    const salt = await bycript.genSalt(this.saltRounds);
    const hashedPassword = await bycript.hash(text, salt);
    return hashedPassword;
  }

  async comparate(text1: string, text2: string): Promise<boolean> {
    return await bycript.compare(text1, text2);
  }
}
