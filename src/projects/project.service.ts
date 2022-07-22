import { ProjectCreateDTO } from './dto/create-project.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  async getAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['todos'],
    });
  }

  async create(todo: ProjectCreateDTO): Promise<Project> {
    let tdo = this.projectRepository.create(todo);
    return this.projectRepository.save(tdo);
  }
}
