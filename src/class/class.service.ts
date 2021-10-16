import { Injectable } from '@nestjs/common';
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
    return await this.prisma.classes.create({ data: createClassDto });
  }

  async findAll() {
    return await this.prisma.classes.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.classes.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findByName(name: string) {
    return await this.prisma.classes.findMany({
      where: {
        name: name,
      },
    });
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return await this.prisma.classes.update({
      data: updateClassDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.classes.delete({
      where: {
        id: id,
      },
    });
  }
}
