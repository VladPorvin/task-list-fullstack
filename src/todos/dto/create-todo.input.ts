import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string;

  @Field()
  isCompleted: boolean;

  @Field()
  projectTitle: string;
}