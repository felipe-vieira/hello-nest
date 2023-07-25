import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  find(id: number): Cat {
    return this.cats.find((c) => c.id == id);
  }
}
