import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() request: Cat): Promise<string> {
    this.catsService.create(request);
    return 'ok';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Cat> {
    const cat = this.catsService.find(id);
    if (cat == null) {
      throw new NotFoundException('not found');
    }
    return cat;
  }
}
