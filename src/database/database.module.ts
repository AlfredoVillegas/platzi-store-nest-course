import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [{ provide: 'API_KEY', useValue: 'sss' }],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
