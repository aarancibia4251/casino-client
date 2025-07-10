import supabase from "../supabase/client";
import { CourseEntity } from "../../domain/entities/course.entity";
import { CourseRepository } from "../../application/interfaces/course.repository";

export class CourseRepositoryImpl implements CourseRepository {
  selectCourse = supabase.from("Course").select();
  async getCourses(): Promise<CourseEntity[]> {
    const { data, error } = await this.selectCourse;
    if (error) {
      throw new Error("Could not load course");
    }
    return data;
  }

  async getCourse(id: string): Promise<CourseEntity> {
    const { data, error } = await this.selectCourse.eq("id", id).single();
    if (error) {
      throw new Error("Could not load course");
    }
    return data;
  }
}
