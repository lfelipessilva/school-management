import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { v4 as uuid } from 'uuid';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService, private teacher: TeacherService) {}

  async create(createClassDto: CreateClassDto) {
    createClassDto.id = uuid();
    try {
      return await this.prisma.classes.create({
        data: {
          id: createClassDto.id,
          name: createClassDto.name,
          teacherId: createClassDto.teacherId,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.prisma.classes.findMany();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.classes.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findByName(name: string) {
    try {
      return await this.prisma.classes.findMany({
        where: {
          name: name,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    try {
      return await this.prisma.classes.update({
        data: {
          name: updateClassDto.name,
          teacherId: updateClassDto.teacherId,
        },
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.classes.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
