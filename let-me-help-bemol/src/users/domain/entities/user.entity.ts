import { User } from '@prisma/client';

export class UserEntity implements User {
  age: number;
  id: number;
  email: string;
  phone: string;
  name: string;
  cep: string;
}
