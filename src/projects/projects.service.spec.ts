import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from './repository/project.entity';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        // provide a mock implementation of ProjectRepository
        {
          provide: getRepositoryToken(Project),
          useValue: {
            owner: '0x69915a6828f49c11ab8e2ab9a1b2113dc86fef25',
            find: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of projects', async () => {
    const owner = (getRepositoryToken(Project) as any).owner;
    const projects = await service.findAll(owner);
    expect(projects).toEqual([]);
  });
});
