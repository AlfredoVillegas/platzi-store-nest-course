import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import config from 'src/config';
import { PayloadToken } from '../models/token.model';

const PassportStrategyJwt = PassportStrategy(Strategy, 'jwt');

@Injectable()
export class JwtStrategy extends PassportStrategyJwt {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.secretKey,
    });
  }

  validate(payload: PayloadToken) {
    return payload;
  }
}
