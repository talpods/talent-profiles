class Course {
  constructor(data) {
    this.provider = data.courseProvider;
    this.courses = data.coursesNames.map((course) => course);
  }
}

export default Course;
