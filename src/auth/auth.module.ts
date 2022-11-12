import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import config from 'src/config';
import { UsersModule } from 'src/users/users.module';
import { AuhtController } from './controllers/auht.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.secretKey,
          signOptions: {
            expiresIn: '1d',
          },
        };
      },
    }),
  ],

  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuhtController],
})
export class AuthModule {}
