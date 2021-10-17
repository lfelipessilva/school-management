import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  async create(createGradesDto: CreateGradeDto) {
    createGradesDto.id = uuid();
    try {
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
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.prisma.grades.findMany();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.grades.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findByStudentId(studentId: string) {
    try {
      return await this.prisma.grades.findMany({
        where: {
          studentId: studentId,
        },
        include: {
          student: true,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(id: string, updateGradeDto: UpdateGradeDto) {
    try {
      return await this.prisma.grades.update({
        data: {
          first_bimester: updateGradeDto.first_bimester,
          second_bimester: updateGradeDto.second_bimester,
          third_bimester: updateGradeDto.third_bimester,
          fourth_bimester: updateGradeDto.fourth_bimester,
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
      return await this.prisma.grades.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
