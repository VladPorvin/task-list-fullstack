import { Field, InputType } from '@nestjs/graphql';
import { Todo } from 'src/todos/entities/todo.entity';
import { OneToMany } from 'typeorm';

@InputType()
export class ProjectCreateDTO {
  @Field()
  title: string;
}
