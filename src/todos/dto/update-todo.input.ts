import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field()
  id: number;

  @Field()
  text: string;

  @Field()
  isCompleted: boolean;
}
