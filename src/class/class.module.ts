import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  controllers: [ClassController],
  providers: [ClassService],
  imports: [PrismaModule, TeacherModule],
})
export class ClassModule {}
