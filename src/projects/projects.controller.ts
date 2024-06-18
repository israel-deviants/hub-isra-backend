import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Request } from 'express';

interface CustomRequest extends Request {
  user: any;
}

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: CustomRequest) {
    const payload = req.user;
    const owner = payload.address;
    return this.projectsService.findAll(owner.toLowerCase());
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) project: CreateProjectDto) {
    if (!project.fav) project.fav = false;
    return this.projectsService.create(project);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Req() req: CustomRequest, @Param('id') id: string) {
    const payload = req.user;
    const owner = payload.address;
    return this.projectsService.delete(id, owner.toLowerCase());
  }
}
