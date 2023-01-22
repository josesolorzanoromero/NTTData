import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TribesService } from './tribes.service';

@Controller('tribes')
export class TribesController {
  constructor(private tribeService: TribesService) {}

  @Get(':id')
  getMetrics(@Param('id', ParseIntPipe) id: number) {
    return this.tribeService.getMetrics(id);
  }
}
