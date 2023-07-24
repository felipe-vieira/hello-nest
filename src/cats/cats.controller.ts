import { Body, Controller, Get, Param, Post } from '@nestjs/common';

export interface Cat {
  id: number;
  name: string;
}

@Controller('cats')
export class CatsController {
  catList: Cat[] = [
    {
      id: 1,
      name: 'Cronos',
    },
    {
      id: 2,
      name: 'Rabo torto',
    },
  ];

  @Post()
  async create(@Body() request: Cat): Promise<string> {
    this.catList.push(request);
    return 'ok';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catList;
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Cat> {
    return this.catList.find((c) => c.id == id);
  }
}
