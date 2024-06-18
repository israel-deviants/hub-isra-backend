import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './repository/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAll(owner: string): Promise<Project[]> {
    return this.projectRepository.find({ where: { owner } });
  }

  create(project: CreateProjectDto): Promise<Project> {
    project.owner = project.owner.toLowerCase();
    return this.projectRepository.save(project);
  }

  async delete(id: string, owner: string): Promise<void> {
    const project = this.projectRepository.findOne({
      where: {
        id: id,
        owner: owner,
      },
    });
    const num_id = (await project).num_id;
    await this.projectRepository.delete(num_id);
  }
}
