import { CourseEntity } from "../../domain/entities/course.entity";

export interface CourseRepository {
  getCourses(): Promise<CourseEntity[]>;
}
