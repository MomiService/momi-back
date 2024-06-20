import { User } from '@prisma/client';

export type CreateUserDto = Omit<User, 'id'>;

export const UserPrefab: Omit<User, 'id' | 'email' | 'password' | 'name'> = {
  active: false,
  city: '',
  country: '',
  EPS: '',
  phone_number: '',
  role: 'USER',
};
