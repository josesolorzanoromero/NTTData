import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Organization } from './entities/Organization.entity';
import { MockModule } from './mock/mock.module';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-106252-0.cloudclusters.net',
      port: 19835,
      username: 'admin',
      password: 'Emp9ZWJw',
      database: 'bdnttdata',
      entities: [Organization],
      synchronize: true,
    }),
    MockModule,
    OrganizationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
