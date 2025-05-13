import { CourseServiceImpl } from "../../application/services/course.service.impl";
import { CourseRepositoryImpl } from "../../infrastructure/repository/course.repository.impl";

const courseRepository = new CourseRepositoryImpl();
const courseService = new CourseServiceImpl(courseRepository);
export default courseService;
