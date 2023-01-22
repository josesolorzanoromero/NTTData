import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Metrics } from './entities/Metrics.entity';
import { Organization } from './entities/Organization.entity';
import { Repositories } from './entities/Repositories.entity';
import { Tribe } from './entities/Tribe.entity';
import { MockModule } from './mock/mock.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { TribesModule } from './tribes/tribes.module';
import { GendercsvModule } from './gendercsv/gendercsv.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-106252-0.cloudclusters.net',
      port: 19835,
      username: 'admin',
      password: 'Emp9ZWJw',
      database: 'bdnttdata',
      entities: [Organization, Tribe, Repositories, Metrics],
      synchronize: true,
    }),
    MockModule,
    OrganizationsModule,
    TribesModule,
    GendercsvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
