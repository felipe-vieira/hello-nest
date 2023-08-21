import * as Joi from 'joi';

export const catSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
});

export interface Cat {
  id: number;
  name: string;
  age: number;
}
