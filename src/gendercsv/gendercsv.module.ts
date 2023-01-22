import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribe } from 'src/entities/Tribe.entity';
import { MockModule } from 'src/mock/mock.module';
import { MockService } from 'src/mock/mock.service';
import { TribesModule } from 'src/tribes/tribes.module';
import { TribesService } from 'src/tribes/tribes.service';
import { GendercsvController } from './gendercsv.controller';
import { GendercsvService } from './gendercsv.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe])],
  controllers: [GendercsvController],
  providers: [GendercsvService, TribesService, MockService],
})
export class GendercsvModule {}
