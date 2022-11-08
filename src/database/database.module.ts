import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Global()
@Module({
  imports: [],
  providers: [{ provide: 'API_KEY', useValue: 'sss' }, ...databaseProviders],
  exports: ['API_KEY', ...databaseProviders],
})
export class DatabaseModule {}

/* Prueba para tener el cliente de postgres en los servicios

import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config';

const providerClientPg= {
 
  provide: 'CLIENT_PG',
  inject: [config.KEY],

  useFactory: (configService: ConfigType<typeof config>) => {
    const { postgres } = configService;
    const clientPg = new Client({
      user: postgres.user,
      host: postgres.host,
      database: postgres.db,
      password: postgres.password,
      port: postgres.port,
    });
    clientPg.connect();
    return clientPg;
  },
},
*/
