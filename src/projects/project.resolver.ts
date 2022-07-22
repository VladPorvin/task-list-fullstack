import { ProjectCreateDTO } from './dto/create-project.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { ProjectService } from './project.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}
  @Query(() => [Project], { name: 'getAllProjects' })
  getAll() {
    return this.projectService.getAll();
  }

  @Mutation(() => Project, { name: 'createProject' })
  create(@Args('project') project: ProjectCreateDTO) {
    return this.projectService.create(project);
  }
}
