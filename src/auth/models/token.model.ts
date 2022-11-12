import { Role } from './roles.model';

export interface PayloadToken {
  role: string;
  sub: number;
}
