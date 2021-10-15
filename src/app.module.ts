import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentModule } from './student/student.module';
import { GradeModule } from './grade/grade.module';
import { ClassModule } from './class/class.module';
@Module({
  imports: [TeacherModule, PrismaModule, StudentModule, GradeModule, ClassModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
