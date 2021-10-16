import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    try {
      createTeacherDto.id = uuid();
      return await this.prisma.teacher.create({ data: createTeacherDto });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.prisma.teacher.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.teacher.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findByName(name: string) {
    return await this.prisma.teacher.findMany({
      where: {
        name: name,
      },
    });
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return await this.prisma.teacher.update({
      data: updateTeacherDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.teacher.delete({
      where: {
        id: id,
      },
    });
  }
}
