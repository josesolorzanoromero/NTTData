import { Controller, Get, Param, ParseIntPipe, Header } from '@nestjs/common';
import { GendercsvService } from './gendercsv.service';
import { Response as Res } from 'express';

@Controller('gendercsv')
export class GendercsvController {
  constructor(private gendercsvService: GendercsvService) {}

  @Get(':id')
  @Header('Content-type', 'text/csv')
  @Header('content-Disposition', 'attachment')
  getCSV(@Param('id', ParseIntPipe) id: number) {
    return this.gendercsvService.getCSV(id);
  }
}
