import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('mock')
export class MockController {
  constructor(private mockService: MockService) {}
  @Get()
  getData() {
    return this.mockService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.mockService.getOne(id);
  }
}
