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
import { CreateOrganizationDto } from './dtos/CreateOrganization.dto';
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
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.organizationsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.organizationsService.delete(id);
  }
}
