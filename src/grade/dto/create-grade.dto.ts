export class CreateGradeDto {
  id: string;
  first_bimester?: number;
  second_bimester?: number;
  third_bimester?: number;
  fourth_bimester?: number;
  studentId: never;
  classId: string;
  createdAt: Date;
  updatedAt: Date;
}
