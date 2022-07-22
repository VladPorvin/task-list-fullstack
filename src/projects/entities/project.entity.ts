import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from 'src/todos/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('projects')
export class Project {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @OneToMany(() => Todo, (todo) => todo.project)
  @Field(() => [Todo], { nullable: true })
  todos: Todo[];
}
