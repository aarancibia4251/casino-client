import supabase from "../supabase/client";
import { CourseEntity } from "../../domain/entities/course.entity";
import { CourseRepository } from "../../application/interfaces/course.repository";

export class CourseRepositoryImpl implements CourseRepository {
  async getCourses(): Promise<CourseEntity[]> {
    const { data, error } = await supabase.from("Course").select();
    if (error) {
      throw new Error("Could not load course");
    }
    return data;
  }
}
