import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/entities/User.entity';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuhtController {
  constructor(private authServices: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const result = this.authServices.generateJWT(req.user as User);
    return result;
  }
}
