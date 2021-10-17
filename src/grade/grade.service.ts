import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  async create(createGradesDto: CreateGradeDto) {
    createGradesDto.id = uuid();

    return await this.prisma.grades.create({
      data: {
        id: createGradesDto.id,
        first_bimester: 0,
        second_bimester: 0,
        third_bimester: 0,
        fourth_bimester: 0,
        studentId: createGradesDto.studentId,
        classId: createGradesDto.classId,
      },
    });
  }

  async findAll() {
    return await this.prisma.grades.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.grades.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findByStudentName(studentId: string) {
    return await this.prisma.grades.findMany({
      where: {
        studentId: studentId,
      },
    });
  }

  async update(id: string, updateGradesDto: UpdateGradeDto) {
    return await this.prisma.grades.update({
      data: updateGradesDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.grades.delete({
      where: {
        id: id,
      },
    });
  }
}
