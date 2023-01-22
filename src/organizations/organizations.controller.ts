import {
  Controller,
  ValidationPipe,
  UsePipes,
  Body,
  Get,
  Post,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { OrganizationDto } from './dto/Organization.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}
  @Get()
  getAll() {
    return this.organizationsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.organizationsService.getOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() data: OrganizationDto) {
    console.log('data');
    console.log(data);
    return this.organizationsService.create(data);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OrganizationDto,
  ) {
    return this.organizationsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.organizationsService.delete(id);
  }
}
