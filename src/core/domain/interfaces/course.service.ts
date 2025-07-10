import { CourseEntity } from "../entities/course.entity";

export interface CourseService {
  getCourses(): Promise<CourseEntity[]>;
  getCourse(id: string): Promise<CourseEntity>;
}
