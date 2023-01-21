import { Controller, Get } from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('mock')
export class MockController {
  constructor(private mockService: MockService) {}
  @Get()
  getData() {
    return this.mockService.findAllData();
  }
}
