import { Injectable, BadRequestException } from '@nestjs/common';
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
      return await this.prisma.teacher.create({
        data: {
          id: createTeacherDto.id,
          name: createTeacherDto.name,
          cpf: createTeacherDto.cpf,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.prisma.teacher.findMany();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.teacher.findFirst({
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
      return await this.prisma.teacher.findMany({
        where: {
          name: name,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    try {
      return await this.prisma.teacher.update({
        data: {
          name: updateTeacherDto.name,
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
      return await this.prisma.teacher.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
