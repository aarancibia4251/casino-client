import { CourseService } from "../../domain/interfaces/course.service";
import { CourseEntity } from "../../domain/entities/course.entity";
import { CourseRepository } from "../interfaces/course.repository";

export class CourseServiceImpl implements CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}
  getCourses(): Promise<CourseEntity[]> {
    return this.courseRepository.getCourses();
  }

  getCourse(id: string): Promise<CourseEntity> {
    return this.courseRepository.getCourse(id);
  }
}
