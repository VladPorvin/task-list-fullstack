import { Project } from './../../projects/entities/project.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('todos')
export class Todo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  text: string;

  @Field()
  @Column()
  isCompleted: boolean;

  @ManyToOne(() => Project, (project) => project.todos)
  @Field(() => Project)
  project: Project;

  @Column()
  @Field()
  projectTitle: string;
}
