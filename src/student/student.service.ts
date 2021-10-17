import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    try {
      createStudentDto.id = uuid();
      return await this.prisma.student.create({
        data: {
          id: createStudentDto.id,
          name: createStudentDto.name,
          cpf: createStudentDto.cpf,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.prisma.student.findMany();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.student.findFirst({
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
      return await this.prisma.student.findMany({
        where: {
          name: name,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    try {
      return await this.prisma.classes.update({
        data: {
          name: updateStudentDto.name,
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
