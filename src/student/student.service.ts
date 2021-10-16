import { Injectable } from '@nestjs/common';
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
      return await this.prisma.student.create({ data: createStudentDto });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.prisma.student.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.student.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findByName(name: string) {
    return await this.prisma.student.findMany({
      where: {
        name: name,
      },
    });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return await this.prisma.student.update({
      data: updateStudentDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.student.delete({
      where: {
        id: id,
      },
    });
  }
}
