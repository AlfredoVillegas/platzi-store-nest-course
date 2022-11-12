import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/User.entity';
import { UsersService } from 'src/users/services/users.services';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtServices: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) return null;

    return user;
  }

  generateJWT(user: User): { user: User; acces_token: string } {
    const payload: PayloadToken = {
      role: user.role,
      sub: user.id,
    };

    const acces_token = this.jwtServices.sign(payload);

    return { user, acces_token };
  }
}
