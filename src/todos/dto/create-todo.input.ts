import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string;

  @Field()
  isCompleted: boolean;

  @Field(() => Int)
  projectId: number;
}
