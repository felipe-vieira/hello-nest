import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post, UsePipes
} from "@nestjs/common";
import { Cat, catSchema } from "./cat.interface";
import { CatsService } from './cats.service';
import { JoiValidationPipe } from "../pipes/joiValidation.pipe";

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  @UsePipes(new JoiValidationPipe(catSchema))
  async create(@Body() request: Cat): Promise<string> {
    this.catsService.create(request);
    return 'ok';
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number): Promise<Cat> {
    const cat = this.catsService.find(id);
    if (cat == null) {
      throw new NotFoundException('not found');
    }
    return cat;
  }
}
