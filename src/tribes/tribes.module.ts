import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribe } from 'src/entities/Tribe.entity';
import { TribesController } from './tribes.controller';
import { TribesService } from './tribes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe])],
  controllers: [TribesController],
  providers: [TribesService],
})
export class TribesModule {}
